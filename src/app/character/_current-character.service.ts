import { Injectable } from '@angular/core';
import {Character} from '../_models/character';

@Injectable({
  providedIn: 'root'
})
export class CurrentCharacterService {
  currentCharacter: Character = new Character();

  constructor() { }
}
