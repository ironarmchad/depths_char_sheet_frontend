import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService
  ) {
    this.character = this.current.character;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }

}
