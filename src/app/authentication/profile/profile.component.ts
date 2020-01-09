import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Character} from '../../_models/character';
import {CharacterService} from '../../_services/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  yourCharacters: Character[] = [];
  viewableCharacters: Character[] = [];

  constructor(
    private charServ: CharacterService
  ) {
  }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.charServ.getCharacterAll().subscribe(res => {
      this.yourCharacters = res;
    });

    this.charServ.getCharacterViewable().subscribe(res => {
      this.viewableCharacters = res;
    });
  }

}
