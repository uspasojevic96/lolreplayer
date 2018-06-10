import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import Long from '../long';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fs: any;
  dialog: Electron.Dialog = this._electronService.remote.dialog;
  window: Electron.BrowserWindow = this._electronService.remote.getCurrentWindow();
  constructor(private _electronService: ElectronService) {
    this.fs = this._electronService.remote.require('fs');
    console.log(this.fs);
  }

  loadFileContent(): void {
    this.dialog.showOpenDialog(this.window, {}, (fileNames) => {
      if (fileNames === undefined) {
        console.error('no files selected!');
        return;
      }
      console.log(fileNames);
      this.fs.readFile(fileNames[0], (status, fd: Buffer) => {
      console.log(status);
      console.log(fd);
      if (status) {
        console.log(status.message);
        return;
      }

      const header: any = {};
      let metadata: any = {};
      const payload_header: any = {};

      // let buffer = Buffer.alloc(6);
      // this.fs.readSync(fd, buffer, 0, 6, 0);
      header.magic = fd.toString('utf8', 0, 6);
      // console.log(header.magic);
      // buffer = Buffer.alloc(256);
      // this.fs.readSync(fd, buffer, 0, 256, 6);
      header.signature = fd.subarray(6, 262);

      // buffer = Buffer.alloc(26);
      // this.fs.readSync(fd, buffer, 0, 26, 262);
      header.header_length = fd.readUInt16LE(262);
      header.file_length = fd.readUInt32LE(264);
      header.metadata_offset = fd.readUInt32LE(268);
      header.metadata_length = fd.readUInt32LE(272);
      header.payload_header_offset = fd.readUInt32LE(276);
      header.payload_header_length = fd.readUInt32LE(280);
      header.payload_offset = fd.readUInt32LE(284);

      // console.log(header);
      // buffer = Buffer.alloc(header.metadata_length);

      // this.fs.readSync(fd, buffer, 0, header.metadata_length, header.metadata_offset);
      // console.log(header);
      metadata = JSON.parse(fd.toString('utf8', header.metadata_offset, header.metadata_offset + header.metadata_length));
      metadata.statsJson = JSON.parse(metadata.statsJson);

      // buffer = Buffer.alloc(8);
      // this.fs.readSync(fd, buffer, 0, 8, header.header_length + header.metadata_length);
      // payload_header.game_id = (new Long(buffer.readUInt32LE(0), buffer.readUInt32LE(4))).toString();

      payload_header.game_id = (new Long(fd.readUInt32LE(header.metadata_length + header.metadata_offset), fd.readUInt32LE(header.metadata_length + header.metadata_offset + 4))).toString();

      // buffer = Buffer.alloc(4);
      // this.fs.readSync(fd, buffer, 0, 4, header.header_length + header.metadata_length + 8);
      payload_header.game_length = fd.readUInt32LE(header.header_length + header.metadata_length + 8);

      console.log(header);
      console.log(payload_header);
      console.log(metadata);
    });

    });
  }
}
