import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompendiumRoutingModule } from './compendium-routing.module';
import { CompendiumComponent } from './compendium.component';
import { ViewComponent } from './view/view.component';
import {FormsModule} from '@angular/forms';
import {NgxMdModule} from 'ngx-md';


@NgModule({
  declarations: [CompendiumComponent, ViewComponent],
  imports: [
    CommonModule,
    CompendiumRoutingModule,
    FormsModule,
    NgxMdModule.forRoot()
  ]
})
export class CompendiumModule { }
