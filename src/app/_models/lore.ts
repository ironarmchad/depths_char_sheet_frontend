import {Deserializable} from '../_interfaces/deserializable';

export class Lore implements Deserializable {
  summary?: string;
  description?: string;

  constructor() {
    this.summary = '';
    this.description = '';
  }


  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
