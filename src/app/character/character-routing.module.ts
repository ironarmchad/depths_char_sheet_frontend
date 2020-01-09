import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterComponent} from './character.component';
import {AuthGuard} from '../_guards/auth.guard';
import {ProfileComponent} from './profile/profile.component';
import {EditComponent} from './edit/edit.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  {
    path: ':id/edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/view',
    component: ViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: CharacterComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
