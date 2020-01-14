import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPlayerComponent} from './new-player/new-player.component';
import {NewStoryTellerComponent} from './new-story-teller/new-story-teller.component';
import {GuidesComponent} from './guides.component';


const routes: Routes = [
  {
    path: '',
    component: GuidesComponent,
    children: [
      {
        path: 'new-player',
        component: NewPlayerComponent
      },
      {
        path: 'new-story-teller',
        component: NewStoryTellerComponent
      },
      {
        path: '',
        redirectTo: 'new-player',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
