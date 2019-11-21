import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../_services/character.service';
import {Character} from '../_models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private charServ: CharacterService
  ) {
  }

  ngOnInit() {
    this.charServ.getCharacterAll().subscribe(res => {
      this.characters = res;
    });
  }

}
