import {RouterModule, Routes} from '@angular/router';
import {BackgroundComponent} from './background/background.component';
import {AuthGuard} from '../../_guards/auth.guard';
import {StatsComponent} from './stats/stats.component';
import {NaturalAbilitiesComponent} from './natural-abilities/natural-abilities.component';
import {SuperAbilitiesComponent} from './super-abilities/super-abilities.component';
import {ItemsComponent} from './items/items.component';
import {CreateComponent} from './create.component';
import {NgModule} from '@angular/core';

const routes: Routes = [

  { path: '', component: CreateComponent, canActivate: [AuthGuard],
    children: [
      { path: 'background', component: BackgroundComponent, canActivate: [AuthGuard] },
      { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
      { path: 'naturalAbilities', component: NaturalAbilitiesComponent, canActivate: [AuthGuard] },
      { path: 'superAbilities', component: SuperAbilitiesComponent, canActivate: [AuthGuard] },
      { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {}
