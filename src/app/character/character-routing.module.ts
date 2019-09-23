import {CharacterComponent} from './character.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GetComponent} from './get/get.component';
import {AuthGuard} from '../_guards/auth.guard';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: ':id/edit',
    loadChildren: './edit/edit.module#EditModule',
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: GetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: CharacterComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
