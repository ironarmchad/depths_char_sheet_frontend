import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.scss']
})
export class CharCardComponent {
  @Input() character: Character;

  constructor(
  ) {
  }
}
