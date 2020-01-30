import { Component, OnInit } from '@angular/core';
import {User} from '../../_models/user';
import {AuthenticationService} from '../../_services/authentication.service';
import {CharacterService} from '../../_services/character.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-button',
  templateUrl: './character-button.component.html',
  styleUrls: ['./character-button.component.scss']
})
export class CharacterButtonComponent implements OnInit {
  user: User;

  constructor(
    private authServ: AuthenticationService,
    private charServ: CharacterService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authServ.currentUser.subscribe(next => {
      this.user = next;
    });
  }

  newCharacter() {
    this.charServ.newCharacter().subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      console.log(res);
      this.router.navigate(['character', res]);
    });
  }

}
