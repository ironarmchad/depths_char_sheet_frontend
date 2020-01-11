import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../_services/character.service';
import {Character} from '../_models/character';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  viewable: Character[] = [];

  constructor(
    private charServ: CharacterService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadCharacters();

    this.charServ.getCharacterViewable().subscribe(res => {
      this.viewable = res;
    });
  }

  loadCharacters() {
    this.charServ.getCharacterAll().subscribe(res => {
      this.characters = res;
    });
  }

  onNewCharacter() {
    this.charServ.newCharacter().subscribe(res => {
      this.router.navigate(['character', res, 'edit']);
    });
  }

}
