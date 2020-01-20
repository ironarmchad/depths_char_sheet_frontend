import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from './all/all.component';
import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: ':id',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'all'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
