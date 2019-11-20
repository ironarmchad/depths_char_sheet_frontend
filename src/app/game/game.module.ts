import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameHomeComponent } from './game-home/game-home.component';


@NgModule({
  declarations: [GameHomeComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
