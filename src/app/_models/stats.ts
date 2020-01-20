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
  hpCurrent: number;
  fpCurrent: number;
  method: string;
  xpTotal: number;
  xpCurrent: number;

  constructor() {
    this.strength = 0;
    this.reflex = 0;
    this.vitality = 0;
    this.speed = 0;
    this.awareness = 0;
    this.willpower = 0;
    this.imagination = 0;
    this.attunement = 0;
    this.faith = 0;
    this.luck = 0;
    this.charisma = 0;
    this.hpCurrent = 0;
    this.fpCurrent = 0;
    this.method = '';
    this.xpTotal = 0;
    this.xpCurrent = 0;
  }

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

  get statList(): string[] {
    return [
      'Strength',
      'Reflex',
      'Vitality',
      'Speed',
      'Awareness',
      'Willpower',
      'Imagination',
      'Attunement',
      'Faith',
      'Luck',
      'Charisma'
    ];
  }

  get physList(): string[] {
    return [
      'Strength',
      'Reflex',
      'Vitality',
      'Speed',
      'Awareness'
    ];
  }

  get mentList(): string[] {
    return [
      'Willpower',
      'Imagination',
      'Attunement',
      'Faith',
      'Luck',
      'Charisma'
    ];
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

  private statMajors(statValue: number): number {
    if (statValue > 6) {
      return statValue - 6;
    }

    return 0;
  }

  private totalMajorStatUps(): number {
    let sum = 0;

    sum += this.statMajors(this.strength);
    sum += this.statMajors(this.reflex);
    sum += this.statMajors(this.vitality);
    sum += this.statMajors(this.speed);
    sum += this.statMajors(this.awareness);
    sum += this.statMajors(this.willpower);
    sum += this.statMajors(this.attunement);
    sum += this.statMajors(this.imagination);
    sum += this.statMajors(this.faith);
    sum += this.statMajors(this.luck);
    sum += this.statMajors(this.charisma);

    return sum - 1;
  }

  get totalHp(): number {
    const statUps = this.totalMajorStatUps();

    if (statUps > 0) {
      return this.vitality * 20 + 10 * this.totalMajorStatUps();
    } else {
      return this.vitality * 20;
    }
  }

  get totalFP(): number {
    return Math.max(this.awareness, this.willpower, this.attunement, this.imagination, this.faith, this.luck, this.charisma) * 10;
  }
}
