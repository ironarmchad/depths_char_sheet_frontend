import {CharacterComponent} from './character.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'create', loadChildren: './create/create.module#CreateModule'},
  {
    path: '',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
