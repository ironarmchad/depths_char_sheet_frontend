import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-super-abilities',
  templateUrl: './super-abilities.component.html',
  styleUrls: ['./super-abilities.component.scss']
})
export class SuperAbilitiesComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = this.current.character;
  }

  ngOnInit() {
    this.current.character.abilities.superAbilities.forEach(ability => {
      if (ability.slots < 1) {
        ability.slots = 1;
      }
    });
    this.current.patchCharacter();
  }

  ngOnDestroy(): void {
  }

  useFp(fpUse: number): void {
    this.current.character.stats.fpCurrent -= fpUse;
  }
}
