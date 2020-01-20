import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { AllComponent } from './all/all.component';
import {ProfileModule} from './profile/profile.module';


@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ProfileModule,
  ]
})
export class CharacterModule { }
