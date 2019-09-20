import {CharacterComponent} from './character.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
  {
    path: '',
    component: CharacterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
