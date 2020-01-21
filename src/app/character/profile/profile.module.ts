import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import { LoreComponent } from './lore/lore.component';
import { StatsComponent } from './stats/stats.component';
import {FormsModule} from '@angular/forms';
import { StatsPointBuyComponent } from './stats-point-buy/stats-point-buy.component';
import { NaturalAbilitiesComponent } from './natural-abilities/natural-abilities.component';
import { NaturalAbilitiesEditComponent } from './natural-abilities-edit/natural-abilities-edit.component';
import { SuperAbilitiesComponent } from './super-abilities/super-abilities.component';
import { SuperAbilitiesEditComponent } from './super-abilities-edit/super-abilities-edit.component';
import { ItemComponent } from './item/item.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { StatAbilityComponent } from './stat-ability/stat-ability.component';
import { StatAbilityEditComponent } from './stat-ability-edit/stat-ability-edit.component';


@NgModule({
  declarations: [ProfileComponent, LoreComponent, StatsComponent, StatsPointBuyComponent, NaturalAbilitiesComponent, NaturalAbilitiesEditComponent, SuperAbilitiesComponent, SuperAbilitiesEditComponent, ItemComponent, ItemEditComponent, StatAbilityComponent, StatAbilityEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
