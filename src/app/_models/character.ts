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
    Object.assign(this, input);
    return this;
  }
}
