import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { InfoComponent } from './edit/info/info.component';
import { StatsComponent } from './edit/stats/stats.component';
import { AbilitiesComponent } from './edit/abilities/abilities.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CharacterComponent, ProfileComponent, EditComponent, InfoComponent, StatsComponent, AbilitiesComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule
  ]
})
export class CharacterModule { }
