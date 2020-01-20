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


@NgModule({
  declarations: [ProfileComponent, LoreComponent, StatsComponent, StatsPointBuyComponent, NaturalAbilitiesComponent, NaturalAbilitiesEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
