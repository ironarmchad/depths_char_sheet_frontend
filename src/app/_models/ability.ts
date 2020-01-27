import {Deserializable} from '../_interfaces/deserializable';

export class Ability implements Deserializable {
  name?: string;
  description?: string;
  slots?: number;
  fpUse?: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export class StatAbility extends Ability {
  slots = 0;
  usesPerDay: number;
  usedThisDay: number;
}

export class NaturalAbility extends Ability {

  constructor() {
    super();
    this.slots = 1;
  }
}

export class SuperAbility extends Ability {
  slots = 1;
  fpUse?: number;
  usesPerDay?: number;
  usedThisDay?: number;
}

export class Item extends Ability {
  fpUse?: number;
  usesPerDay?: number;
  usedThisDay?: number;

  constructor() {
    super();
    this.slots = 1;
  }

}

