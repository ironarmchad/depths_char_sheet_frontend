import { Injectable } from '@angular/core';
import {Character} from '../_models/character';

@Injectable({
  providedIn: 'root'
})
export class CurrentCharacterService {
  character: Character;

  constructor() {
    this.character = new Character();
  }
}