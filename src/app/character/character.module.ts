import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CharacterRoutingModule} from './character-routing.module';
import {AllComponent} from './all/all.component';
import {ProfileModule} from './profile/profile.module';
import {ViewComponent} from './view/view.component';
import {AbilityCardComponent} from './view/ability-card/ability-card.component';


@NgModule({
  declarations: [
    AllComponent,
    ViewComponent,
    AbilityCardComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ProfileModule,
  ]
})
export class CharacterModule {
}
