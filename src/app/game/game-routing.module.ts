import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameHomeComponent} from './game-home/game-home.component';
import {AuthGuard} from '../_guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: GameHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
