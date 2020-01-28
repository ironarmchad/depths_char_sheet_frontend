import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-stat-ability',
  templateUrl: './stat-ability.component.html',
  styleUrls: ['./stat-ability.component.scss']
})
export class StatAbilityComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = current.character;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }


}
