import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit.component';
import {InfoComponent} from './info/info.component';
import {StatsComponent} from './stats/stats.component';


const routes: Routes = [
  {
    path: ':id/edit',
    component: EditComponent,
    children: [
      {
        path: 'lore',
        component: InfoComponent,
      },
      {
        path: 'stats',
        component: StatsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
