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


@NgModule({
  declarations: [EditComponent, CoreComponent, StatsComponent, PointBuyComponent, StatButtonsComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule
  ],
  entryComponents: [PointBuyComponent],
  providers: [NgbActiveModal],
  bootstrap: [EditComponent]
})
export class EditModule {
}
