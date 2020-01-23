import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CharacterRoutingModule} from './character-routing.module';
import {CharacterComponent} from './character.component';
import {ProfileComponent} from './profile/profile.component';
import {EditComponent} from './edit/edit.component';
import {InfoComponent} from './edit/info/info.component';
import {StatsComponent} from './edit/stats/stats.component';
import {AbilitiesComponent} from './edit/abilities/abilities.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StatAbilitiesComponent} from './edit/abilities/stat-abilities/stat-abilities.component';
import {NaturalAbilityComponent} from './edit/abilities/natural-ability/natural-ability.component';
import {SuperAbilityComponent} from './edit/abilities/super-ability/super-ability.component';
import {ItemsComponent} from './edit/abilities/items/items.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {CharacterCardComponent} from './character-card/character-card.component';
import {StatLineComponent} from './profile/stat-line/stat-line.component';
import {DisplayStatAbilityComponent} from './profile/display-stat-ability/display-stat-ability.component';
import {DisplayNaturalAbilityComponent} from './profile/display-natural-ability/display-natural-ability.component';
import {DisplaySuperAbilityComponent} from './profile/display-super-ability/display-super-ability.component';
import {DisplayItemComponent} from './profile/display-item/display-item.component';
import {ViewComponent} from './view/view.component';
import {AbilityCardComponent} from './view/ability-card/ability-card.component';


@NgModule({
  declarations: [CharacterComponent, ProfileComponent, EditComponent, InfoComponent, StatsComponent, AbilitiesComponent, StatAbilitiesComponent, NaturalAbilityComponent, SuperAbilityComponent, ItemsComponent, CharacterCardComponent, StatLineComponent, DisplayStatAbilityComponent, DisplayNaturalAbilityComponent, DisplaySuperAbilityComponent, DisplayItemComponent, ViewComponent, AbilityCardComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule
  ]
})
export class CharacterModule {
}
