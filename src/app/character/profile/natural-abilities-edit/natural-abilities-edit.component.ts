import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {NaturalAbility} from '../../../_models/ability';

@Component({
  selector: 'app-natural-abilities-edit',
  templateUrl: './natural-abilities-edit.component.html',
  styleUrls: ['./natural-abilities-edit.component.scss']
})
export class NaturalAbilitiesEditComponent implements OnInit, OnDestroy {
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
    this.save();
  }

  save() {
    this.charServ.patchCharacter(this.current.character).subscribe();
  }

  addNatural(): void {
    this.current.character.abilities.naturalAbilities.push(new NaturalAbility());
  }

  deleteNatural(index: number): void {
    this.current.character.abilities.naturalAbilities.splice(index, 1);
  }

  moveNatural(index: number): void {
    this.current.character.abilities.naturalAbilities.splice(this.reposition - 1, 0, this.current.character.abilities.naturalAbilities.splice(index, 1)[0]);
  }

}
