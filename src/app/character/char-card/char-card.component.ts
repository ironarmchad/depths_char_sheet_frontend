import {Component, Input} from '@angular/core';
import {Character} from '../../_models/character';

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
