import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Character} from '../../_models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterEditService {
  private characterSource: BehaviorSubject<Character> = new BehaviorSubject<Character>(new Character());
  char = this.characterSource.asObservable();

  get character() {
    return this.characterSource.value;
  }

  setCharacter(char: Character) {
    this.characterSource.next(char);
  }
}
