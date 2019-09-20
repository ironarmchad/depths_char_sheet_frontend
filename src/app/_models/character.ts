import {Deserializable} from '../_interfaces/deserializable';

export class Character implements Deserializable {
  id?: number;
  owner?: number;
  name?: string;
  summary?: string;
  charType?: string;
  gameId?: number;
  lore?: string;
  strength?: number;
  reflex?: number;
  speed?: number;
  vitality?: number;
  awareness?: number;
  willpower?: number;
  imagination?: number;
  attunement?: number;
  faith?: number;
  luck?: number;
  charisma?: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
