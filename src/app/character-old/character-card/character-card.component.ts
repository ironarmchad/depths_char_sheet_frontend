import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;
  @Output() delete = new EventEmitter();

  constructor(
    private charServ: CharacterService
  ) { }

  ngOnInit() {
  }

  onDelete() {
    this.charServ.deleteCharacter(this.character.id).subscribe();
    this.delete.emit();
  }
}
