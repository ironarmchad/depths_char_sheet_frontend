import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditRoutingModule} from './edit-routing.module';
import {EditComponent} from './edit.component';
import {CoreComponent} from './core/core.component';
import {StatsComponent} from './stats/stats.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbDropdownModule, NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PointBuyComponent} from './stats/point-buy/point-buy.component';
import { StatButtonsComponent } from './stats/point-buy/stat-buttons/stat-buttons.component';
import { DirectEditComponent } from './stats/direct-edit/direct-edit.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AbCardComponent } from './abilities/ab-card/ab-card.component';
import { NewAbilityComponent } from './abilities/new-ability/new-ability.component';


@NgModule({
  declarations: [EditComponent, CoreComponent, StatsComponent, PointBuyComponent, StatButtonsComponent, DirectEditComponent, AbilitiesComponent, AbCardComponent, NewAbilityComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  entryComponents: [PointBuyComponent, DirectEditComponent, NewAbilityComponent],
  providers: [NgbActiveModal],
  exports: [
    NewAbilityComponent
  ],
  bootstrap: [EditComponent]
})
export class EditModule {
}
