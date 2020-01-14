import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { NewPlayerComponent } from './new-player/new-player.component';
import { NewStoryTellerComponent } from './new-story-teller/new-story-teller.component';
import { GuidesComponent } from './guides.component';
import { CharacterCreationTipsComponent } from './character-creation-tips/character-creation-tips.component';
import { CharacterCreationRulesComponent } from './character-creation-rules/character-creation-rules.component';


@NgModule({
  declarations: [NewPlayerComponent, NewStoryTellerComponent, GuidesComponent, CharacterCreationTipsComponent, CharacterCreationRulesComponent],
  imports: [
    CommonModule,
    GuidesRoutingModule
  ]
})
export class GuidesModule { }
