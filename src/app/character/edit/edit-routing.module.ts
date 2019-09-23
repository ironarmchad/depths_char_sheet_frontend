import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoreComponent} from './core/core.component';
import {EditComponent} from './edit.component';
import {StatsComponent} from './stats/stats.component';
import {AuthGuard} from '../../_guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: EditComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'stats',
        component: StatsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'core',
        component: CoreComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'core'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
