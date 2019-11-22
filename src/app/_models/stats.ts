import {Character} from './character';
import {Deserializable} from '../_interfaces/deserializable';

export class Stats implements Deserializable {
  strength: number;
  reflex: number;
  vitality: number;
  speed: number;
  awareness: number;
  willpower: number;
  imagination: number;
  attunement: number;
  faith: number;
  luck: number;
  charisma: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  private pointBuyValue(value: number): number {
    if (!value) {
      return 0;
    } else if (value === 1) {
      return -25;
    } else if (value === 2) {
      return -10;
    } else if (value > 2 && value < 7) {
      return 5 * (value - 3);
    } else {
      return 15 + 10 * (value - 6);
    }
  }

  get pointTotal(): number {
    let sum = 0;
    sum += this.pointBuyValue(this.strength);
    sum += this.pointBuyValue(this.reflex);
    sum += this.pointBuyValue(this.vitality);
    sum += this.pointBuyValue(this.speed);
    sum += this.pointBuyValue(this.awareness);
    sum += this.pointBuyValue(this.willpower);
    sum += this.pointBuyValue(this.imagination);
    sum += this.pointBuyValue(this.attunement);
    sum += this.pointBuyValue(this.faith);
    sum += this.pointBuyValue(this.luck);
    sum += this.pointBuyValue(this.charisma);
    return sum;
  }
}
