import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CompendiumComponent} from './compendium.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  {
    path: ':id',
    component: ViewComponent
  },
  {
    path: '',
    component: CompendiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompendiumRoutingModule { }
