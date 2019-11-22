import {Deserializable} from '../_interfaces/deserializable';

export class Lore implements Deserializable {
  summary?: string;
  description?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
