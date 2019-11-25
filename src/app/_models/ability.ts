import {Deserializable} from '../_interfaces/deserializable';

export class Ability implements Deserializable {
  name?: string;
  description?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}

export class StatAbility extends Ability {
  usesPerDay: number;
  usedThisDay: number;
}

export class NaturalAbility extends Ability {
  slots?: number;
}

export class SuperAbility extends Ability {
  slots = 1;
  fpUse?: number;
  usesPerDay: number;
  usedThisDay: number;
}

export class Item extends Ability {
  slots?: number;
  usesPerDay?: number;
  usedThisDay?: number;
}

