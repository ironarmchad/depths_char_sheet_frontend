import {EMPTY, from, Observable} from 'rxjs';
import {Character} from '../_models/character';

export class CharacterServiceStub {
  characterGet(id: number) {
    return from([new Character()]);
  }
  characterNew(name: string): Observable<Character> {
    return EMPTY;
  }
  characterPatch(char: Character) {
    return EMPTY;
  }
  characterDelete(id: number) {
    return EMPTY;
  }
  characterAll(): Observable<Character[]> {
    return from([[new Character()]]);
  }
}
