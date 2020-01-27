import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';
import {Ability} from '../../../_models/ability';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit, OnDestroy {
  reposition: number;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.reposition = 1;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.character.abilities.items.forEach(item => {
      if (item.slots < 1) {
        item.slots = 1;
      }
    });
    this.current.patchCharacter();
  }

  deleteItem(index: number): void {
    this.current.character.abilities.items.splice(index, 1);
  }

  moveTo(index: number): void {
    this.current.character.abilities.items.splice(this.reposition - 1, 0, this.current.character.abilities.items.splice(index, 1)[0]);
  }

  addItem(): void {
    this.current.character.abilities.items.push(new Ability());
  }

}
