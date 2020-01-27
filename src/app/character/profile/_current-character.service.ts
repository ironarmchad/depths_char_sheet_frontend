import {Injectable} from '@angular/core';
import {Character} from '../../_models/character';
import {User} from '../../_models/user';
import {CharacterService} from '../../_services/character.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentCharacterService {
  character: Character;
  user: User;
  userList: any[];

  constructor(private charServ: CharacterService) {
    this.character = new Character();
    this.user = new User();
    this.userList = [];
  }

  patchCharacter() {
    this.charServ.patchCharacter(this.character).subscribe();
  }
}
