import {Deserializable} from '../_interfaces/deserializable';
import {Stats} from './stats';
import {Abilities} from './abilities';
import {Lore} from './lore';

export class Character implements Deserializable {
  id?: number;
  ownerId?: number;
  name?: string;
  lore?: Lore;
  stats?: Stats;
  abilities?: Abilities;

  deserialize(input: any): this {
    this.id = input.id;
    this.ownerId = input.ownerId;
    this.name = input.name;
    this.lore = new Lore().deserialize(input.lore);
    this.stats = new Stats().deserialize(input.stats);
    this.abilities = new Abilities().deserialize(input.abilities);
    return this;
  }
}
