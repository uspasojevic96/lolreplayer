import { Component, OnInit, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Replay } from '../../replay-struct/replay';
import { ReplayService } from '../replay.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {
  fs: any;
  path: any;

  @Input()
  fileName: String = '';
  replay: Replay;
  filePath: String = '';
  constructor(private _electronService: ElectronService, private _replayService: ReplayService) {
    this.fs = this._electronService.remote.require('fs');
    this.path = this._electronService.remote.require('path');
  }

  ngOnInit() {
    this.filePath = this.path.join(this._electronService.remote.app.getPath('documents'), 'League of Legends', 'Replays', this.fileName);
    this.replay = this._replayService.parseReplay(this.filePath);
    console.log(this.fileName);
  }

}
