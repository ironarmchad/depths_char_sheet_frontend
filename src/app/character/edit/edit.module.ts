import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditRoutingModule} from './edit-routing.module';
import {EditComponent} from './edit.component';
import {CoreComponent} from './core/core.component';
import {StatsComponent} from './stats/stats.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDropdown, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [EditComponent, CoreComponent, StatsComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbDropdownModule
  ],
  bootstrap: [EditComponent]
})
export class EditModule {
}
