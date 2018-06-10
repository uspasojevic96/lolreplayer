import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-replay-list',
  templateUrl: './replay-list.component.html',
  styleUrls: ['./replay-list.component.css']
})
export class ReplayListComponent implements OnInit {

  fs: any;
  path: any;
  osReplayPath: String = '';
  replays: any[];
  constructor(private _electronService: ElectronService) {
    this.fs = this._electronService.remote.require('fs');
    this.path = this._electronService.remote.require('path');
  }

  ngOnInit() {
      this.osReplayPath = this._electronService.remote.app.getPath('documents');
    console.log(this.path.join(this.osReplayPath, 'League of Legends'));
      if (this.fs.existsSync(this.path.join(this.osReplayPath, 'League of Legends', 'Replays'))) {
        this.replays = this.fs.readdirSync(this.path.join(this.osReplayPath, 'League of Legends', 'Replays'));

        this.replays.splice(0, 2);
      }
  }

}
