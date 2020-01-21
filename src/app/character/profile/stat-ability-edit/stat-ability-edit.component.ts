import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {StatAbility} from '../../../_models/ability';

@Component({
  selector: 'app-stat-ability-edit',
  templateUrl: './stat-ability-edit.component.html',
  styleUrls: ['./stat-ability-edit.component.scss']
})
export class StatAbilityEditComponent implements OnInit, OnDestroy {
  reposition: number;

  constructor(
    private current: CurrentCharacterService,
    private charServ: CharacterService,
  ) {
    this.reposition = 1;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.charServ.patchCharacter(this.current.character).subscribe();
  }

  deleteStatAbility(index: number): void {
    this.current.character.abilities.statAbilities.splice(index, 1);
  }

  moveTo(index: number): void {
    this.current.character.abilities.statAbilities.splice(this.reposition - 1, 0, this.current.character.abilities.statAbilities.splice(index, 1)[0]);
  }

  addStatAbility(): void {
    this.current.character.abilities.statAbilities.push(new StatAbility());
  }

}
