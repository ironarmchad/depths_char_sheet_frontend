import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import {CharacterRoutingModule} from './character-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ReactiveFormsModule
  ]
})
export class CharacterModule { }
