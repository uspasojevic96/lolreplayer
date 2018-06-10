import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';


import { AppComponent } from './app.component';
import { ReplayListComponent } from './replay-list/replay-list.component';
import { ReplayComponent } from './replay/replay.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReplayService } from './replay.service';


@NgModule({
  declarations: [
    AppComponent,
    ReplayListComponent,
    ReplayComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule
  ],
  providers: [ReplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
