import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { BackgroundComponent } from './background/background.component';
import { StatsComponent } from './stats/stats.component';
import { NaturalAbilitiesComponent } from './natural-abilities/natural-abilities.component';
import { SuperAbilitiesComponent } from './super-abilities/super-abilities.component';
import { ItemsComponent } from './items/items.component';
import {RouterModule} from '@angular/router';
import {CreateRoutingModule} from './create-routing.module';



@NgModule({
  declarations: [CreateComponent, BackgroundComponent, StatsComponent, NaturalAbilitiesComponent, SuperAbilitiesComponent, ItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
