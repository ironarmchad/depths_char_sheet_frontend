import {Deserializable} from '../_interfaces/deserializable';

export class Ability implements Deserializable {
  id?: number;
  charId?: number;
  name?: string;
  type?: string;
  summary?: string;
  lore?: string;
  macro?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
