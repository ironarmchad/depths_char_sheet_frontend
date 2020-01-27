import {Deserializable} from '../_interfaces/deserializable';
import {Ability} from './ability';

export class Abilities implements Deserializable {
  statAbilities?: Ability[] = [];
  naturalAbilities?: Ability[] = [];
  superAbilities?: Ability[] = [];
  items?: Ability[] = [];

  deserialize(input: any): this {
    if (!input) {
      return this;
    }

    if (input.statAbilities) {
      this.statAbilities = input.statAbilities.map(res => new Ability().deserialize(res));
    }
    if (input.naturalAbilities) {
      this.naturalAbilities = input.naturalAbilities.map(res => new Ability().deserialize(res));
    }
    if (input.superAbilities) {
      this.superAbilities = input.superAbilities.map(res => new Ability().deserialize(res));
    }
    if (input.items) {
      this.items = input.items.map(res => new Ability().deserialize(res));
    }

    return this;
  }

  get naturalSlots(): number {
    let slotTotal = 0;
    this.naturalAbilities.forEach(ability => {
      slotTotal += ability.slots;
    });
    return slotTotal;
  }

  get superSlots(): number {
    return this.superAbilities.length;
  }

  get itemSlots(): number {
    let slotTotal = 0;
    this.items.forEach(item => {
      slotTotal += item.slots;
    });
    return slotTotal;
  }

  get totalSlots(): number {
    return this.naturalSlots + this.superSlots + this.itemSlots;
  }
}
