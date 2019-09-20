import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { LoreComponent } from './lore/lore.component';

const routes: Routes = [
  { path: '', component: EditComponent }
];

@NgModule({
  declarations: [EditComponent, LoreComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class EditModule { }
