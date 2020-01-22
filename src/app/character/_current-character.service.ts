import { Injectable } from '@angular/core';
import {Character} from '../_models/character';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentCharacterService {
  character: Character;
  user: User;
  userList: any[];

  constructor() {
    this.character = new Character();
    this.user = new User();
    this.userList = [];
  }
}
