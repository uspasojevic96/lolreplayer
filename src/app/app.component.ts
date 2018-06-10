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
  constructor(private _electronService: ElectronService) {
  }
}
