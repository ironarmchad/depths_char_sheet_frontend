import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import {CharacterRoutingModule} from './character-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetComponent } from './get/get.component';
import { CharCardComponent } from './char-card/char-card.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CharacterComponent, GetComponent, CharCardComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule
  ]
})
export class CharacterModule { }
