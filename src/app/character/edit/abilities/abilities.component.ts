import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Abilities} from '../../../_models/abilities';
import {Item, NaturalAbility, StatAbility, SuperAbility} from '../../../_models/ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  @Input() abilities: Abilities;
  @Output() save = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  saveState() {
    this.save.emit();
  }

  addStatAbility() {
    this.abilities.statAbilities.push(new StatAbility());
  }

  deleteStatAbility(index: number) {
    this.abilities.statAbilities.splice(index, 1);
  }

  addNaturalAbility() {
    this.abilities.naturalAbilities.push(new NaturalAbility());
  }

  deleteNaturalAbility(index: number) {
    this.abilities.naturalAbilities.splice(index, 1);
  }

  addSuperAbility() {
    this.abilities.superAbilities.push(new SuperAbility());
  }

  deleteSuperAbility(index: number) {
    this.abilities.superAbilities.splice(index, 1);
  }

  addItem() {
    this.abilities.items.push(new Item());
  }

  deleteItem(index: number) {
    this.abilities.items.splice(index, 1);
  }
}
