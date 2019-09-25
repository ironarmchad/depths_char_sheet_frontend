import {Character} from '../../_models/character';

export class Stats {
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

  updateCharacter(char: Character) {
    char.strength = this.strength;
    char.reflex = this.reflex;
    char.vitality = this.vitality;
    char.speed = this.speed;
    char.awareness = this.awareness;
    char.willpower = this.willpower;
    char.imagination = this.imagination;
    char.attunement = this.attunement;
    char.faith = this.faith;
    char.luck = this.luck;
    char.charisma = this.charisma;
  }
}
