import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {Ability} from '../../../_models/ability';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-stat-ability-edit',
  templateUrl: './stat-ability-edit.component.html',
  styleUrls: ['./stat-ability-edit.component.scss']
})
export class StatAbilityEditComponent implements OnInit, OnDestroy {
  character: Character;
  reposition: number;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = this.current.character;
    this.reposition = 1;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }

  deleteStatAbility(index: number): void {
    this.current.character.abilities.statAbilities.splice(index, 1);
  }

  moveTo(index: number): void {
    this.current.character.abilities.statAbilities.splice(this.reposition - 1, 0, this.current.character.abilities.statAbilities.splice(index, 1)[0]);
  }

  addStatAbility(): void {
    this.current.character.abilities.statAbilities.push(new Ability());
  }

}
