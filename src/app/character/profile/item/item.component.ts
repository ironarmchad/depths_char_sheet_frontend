import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = this.current.character;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }

  useFp(fpUsed: number): void {
    this.current.character.stats.fpCurrent -= fpUsed;
  }

}
