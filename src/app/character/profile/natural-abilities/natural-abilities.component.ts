import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-natural-abilities',
  templateUrl: './natural-abilities.component.html',
  styleUrls: ['./natural-abilities.component.scss']
})
export class NaturalAbilitiesComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = this.current.character;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.current.patchCharacter();
  }

}
