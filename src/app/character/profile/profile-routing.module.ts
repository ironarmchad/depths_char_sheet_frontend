import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {LoreComponent} from './lore/lore.component';
import {StatsComponent} from './stats/stats.component';
import {StatsPointBuyComponent} from './stats-point-buy/stats-point-buy.component';
import {NaturalAbilitiesComponent} from './natural-abilities/natural-abilities.component';
import {NaturalAbilitiesEditComponent} from './natural-abilities-edit/natural-abilities-edit.component';


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
