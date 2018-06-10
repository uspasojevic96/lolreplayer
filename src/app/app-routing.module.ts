import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplayComponent } from './replay/replay.component';

const routes: Routes = [
  {
    path: 'replay',
    component: ReplayComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
