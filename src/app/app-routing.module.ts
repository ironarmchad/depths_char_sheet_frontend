import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_guards/auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  { path: 'character', loadChildren: './character/character.module#CharacterModule' },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
