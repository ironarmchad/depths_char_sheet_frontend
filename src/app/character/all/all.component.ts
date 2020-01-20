import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../_services/character.service';
import {Character} from '../../_models/character';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private charServ: CharacterService,
  ) { }

  ngOnInit() {
    this.charServ.getCharacterAll().subscribe( res => {
      this.characters = res;
    });
  }

}
