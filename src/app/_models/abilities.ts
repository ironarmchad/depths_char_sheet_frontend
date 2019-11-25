import {Deserializable} from '../_interfaces/deserializable';
import {Item, NaturalAbility, StatAbility, SuperAbility} from './ability';

export class Abilities implements Deserializable {
  statAbilities?: StatAbility[] = [];
  naturalAbilities?: NaturalAbility[] = [];
  superAbilities?: SuperAbility[] = [];
  items?: Item[] = [];

  deserialize(input: any): this {
    if (!input) {
      return this;
    }

    if (input.statAbilities) {
      this.statAbilities = input.statAbilities.map(res => new StatAbility().deserialize(res));
    }
    if (input.naturalAbilities) {
      this.naturalAbilities = input.naturalAbilities.map(res => new NaturalAbility().deserialize(res));
    }
    if (input.superAbilities) {
      this.superAbilities = input.superAbilities.map(res => new SuperAbility().deserialize(res));
    }
    if (input.items) {
      this.items = input.items.map(res => new Item().deserialize(res));
    }

    return this;
  }
}
