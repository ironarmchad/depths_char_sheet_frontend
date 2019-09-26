import {Stats} from './stats';
import {Character} from './character';

function randInt() {
  return Math.floor(Math.random() * 10);
}

describe('Stats', () => {
  let genericObj: any;

  beforeEach(() => {
    genericObj = {
      strength: randInt(),
      reflex: randInt(),
      vitality: randInt(),
      speed: randInt(),
      awareness: randInt(),
      willpower: randInt(),
      imagination: randInt(),
      attunement: randInt(),
      faith: randInt(),
      luck: randInt(),
      charisma: randInt()
    };
  });

  it('should create an instance', () => {
    expect(new Stats()).toBeTruthy();
  });

  it('should getFromCharacter faithfully', () => {
    const character = new Character();
    character.deserialize(genericObj);

    const statBlock = new Stats();
    statBlock.getFromCharacter(character);

    // tslint:disable-next-line:forin
    for (const attr in Object.getOwnPropertyNames(genericObj)) {
      expect(statBlock[attr]).toBe(genericObj[attr]);
    }
  });

  it('should be deserializable', () => {
    const statBlock = new Stats();

    statBlock.deserialize(genericObj);

    // tslint:disable-next-line:forin
    for (const attr in Object.getOwnPropertyNames(genericObj)) {
      expect(statBlock[attr]).toBe(genericObj[attr]);
    }
  });

  it('should update character faithfully', () => {
    const character = new Character();
    const statBlock = new Stats();
    statBlock.deserialize(genericObj);

    statBlock.updateCharacter(character);

    // tslint:disable-next-line:forin
    for (const attr in Object.getOwnPropertyNames(genericObj)) {
      expect(character[attr]).toBe(genericObj[attr]);
    }
  });
});
