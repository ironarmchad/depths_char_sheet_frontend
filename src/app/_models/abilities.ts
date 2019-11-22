import {Deserializable} from '../_interfaces/deserializable';

export class Abilities implements Deserializable {
  type?: string;
  summary?: string;
  description?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
