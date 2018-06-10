import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Replay } from '../replay-struct/replay';
import Long from '../long';
import { Header } from '../replay-struct/header';
import { Metadata } from '../replay-struct/metadata';
import { PayloadHeader } from '../replay-struct/payload-header';
@Injectable()
export class ReplayService {

  private fs: any;

  constructor(private _electronService: ElectronService) {
    this.fs = this._electronService.remote.require('fs');
  }

  public parseReplay(filePath: String): Replay {
    const replay = new Replay();
    replay.header = new Header();
    replay.metadata = new Metadata();
    replay.metadata.statsJson = [];
    replay.payload_header = new PayloadHeader;
    const fd: Buffer = this.fs.readFileSync(filePath);

    if (fd) {
      replay.header.magic = fd.toString('utf8', 0, 6);
      replay.header.signature = fd.subarray(6, 262);
      replay.header.header_length = fd.readUInt16LE(262);
      replay.header.file_length = fd.readUInt32LE(264);
      replay.header.metadata_offset = fd.readUInt32LE(268);
      replay.header.metadata_length = fd.readUInt32LE(272);
      replay.header.payload_header_offset = fd.readUInt32LE(276);
      replay.header.payload_header_length = fd.readUInt32LE(280);
      replay.header.payload_offset = fd.readUInt32LE(284);

      replay.metadata = JSON.parse(fd.toString('utf8', replay.header.metadata_offset, replay.header.metadata_offset + replay.header.metadata_length));
      replay.metadata.statsJson = JSON.parse(JSON.parse(fd.toString('utf8', replay.header.metadata_offset, replay.header.metadata_offset + replay.header.metadata_length)).statsJson);
      replay.payload_header.game_id = (new Long(fd.readUInt32LE(replay.header.metadata_length + replay.header.metadata_offset), fd.readUInt32LE(replay.header.metadata_length + replay.header.metadata_offset + 4))).toString();
      replay.payload_header.game_length = fd.readUInt32LE(replay.header.header_length + replay.header.metadata_length + 8);
    }
    return replay;
  }

}
