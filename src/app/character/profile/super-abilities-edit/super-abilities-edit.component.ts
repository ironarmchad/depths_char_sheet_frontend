import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {SuperAbility} from '../../../_models/ability';

@Component({
  selector: 'app-super-abilities-edit',
  templateUrl: './super-abilities-edit.component.html',
  styleUrls: ['./super-abilities-edit.component.scss']
})
export class SuperAbilitiesEditComponent implements OnInit, OnDestroy {
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

  addSuper(): void {
    this.current.character.abilities.superAbilities.push(new SuperAbility());
  }

  deleteSuper(index: number): void {
    this.current.character.abilities.superAbilities.splice(index, 1);
  }

  moveTo(index: number): void {
    this.current.character.abilities.superAbilities.splice(this.reposition - 1, 0, this.current.character.abilities.superAbilities.splice(index, 1)[0]);
  }
}
