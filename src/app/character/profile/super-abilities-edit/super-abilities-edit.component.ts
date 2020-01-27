import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {Ability} from '../../../_models/ability';

@Component({
  selector: 'app-super-abilities-edit',
  templateUrl: './super-abilities-edit.component.html',
  styleUrls: ['./super-abilities-edit.component.scss']
})
export class SuperAbilitiesEditComponent implements OnInit, OnDestroy {
  reposition: number;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.reposition = 1;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.character.abilities.superAbilities.forEach(ability => {
      if (ability.slots < 1) {
        ability.slots = 1;
      }
    });
    this.current.patchCharacter();
  }

  addSuper(): void {
    this.current.character.abilities.superAbilities.push(new Ability());
  }

  deleteSuper(index: number): void {
    this.current.character.abilities.superAbilities.splice(index, 1);
  }

  moveTo(index: number): void {
    this.current.character.abilities.superAbilities.splice(this.reposition - 1, 0, this.current.character.abilities.superAbilities.splice(index, 1)[0]);
  }
}
