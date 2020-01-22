import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {LoreComponent} from './lore/lore.component';
import {StatsComponent} from './stats/stats.component';
import {StatsPointBuyComponent} from './stats-point-buy/stats-point-buy.component';
import {NaturalAbilitiesComponent} from './natural-abilities/natural-abilities.component';
import {NaturalAbilitiesEditComponent} from './natural-abilities-edit/natural-abilities-edit.component';
import {SuperAbilitiesComponent} from './super-abilities/super-abilities.component';
import {SuperAbilitiesEditComponent} from './super-abilities-edit/super-abilities-edit.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import {ItemComponent} from './item/item.component';
import {StatAbilityEditComponent} from './stat-ability-edit/stat-ability-edit.component';
import {StatAbilityComponent} from './stat-ability/stat-ability.component';
import {ShareComponent} from './share/share.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'lore',
        component: LoreComponent
      },
      {
        path: 'stats/point-buy',
        component: StatsPointBuyComponent,
      },
      {
        path: 'stats',
        component: StatsComponent
      },
      {
        path: 'naturals/edit',
        component: NaturalAbilitiesEditComponent
      },
      {
        path: 'naturals',
        component: NaturalAbilitiesComponent
      },
      {
        path: 'supers/edit',
        component: SuperAbilitiesEditComponent
      },
      {
        path: 'supers',
        component: SuperAbilitiesComponent
      },
      {
        path: 'items/edit',
        component: ItemEditComponent
      },
      {
        path: 'items',
        component: ItemComponent
      },
      {
        path: 'stat-abilities/edit',
        component: StatAbilityEditComponent
      },
      {
        path: 'stat-abilities',
        component: StatAbilityComponent
      },
      {
        path: 'share',
        component: ShareComponent
      },
      {
        path: '',
        redirectTo: 'lore'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
