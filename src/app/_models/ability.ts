import {Deserializable} from '../_interfaces/deserializable';


export class Ability implements Deserializable {
  name: string;
  description: string;
  slots: number;
  fpUse: number;
  usesPerDay: number;
  usedThisDay: number;

  constructor() {
    this.name = '';
    this.description = '';
    this.slots = 0;
    this.fpUse = 0;
    this.usesPerDay = 0;
    this.usedThisDay = 0;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

