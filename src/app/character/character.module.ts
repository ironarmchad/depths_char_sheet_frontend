import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [CharacterComponent, ProfileComponent, EditComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
