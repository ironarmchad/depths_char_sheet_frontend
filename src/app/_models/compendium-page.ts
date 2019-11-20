import {Deserializable} from '../_interfaces/deserializable';

export class CompendiumPage implements Deserializable {
  id: number;
  ownerId: number;
  title: string;
  content?: string;

  constructor() {
    this.id = -1;
    this.title = '';
    this.content = '';
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
