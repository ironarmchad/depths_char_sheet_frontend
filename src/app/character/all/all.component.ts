import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../../_services/character.service';
import {Character} from '../../_models/character';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  characters: Character[] = [];
  viewables: Character[] = [];

  constructor(
    private charServ: CharacterService,
  ) {
  }

  ngOnInit() {
    this.loadCharacters();

    this.charServ.getCharacterViewable().subscribe(res => {
      this.viewables = res;
    });
  }

  deleteChar(charId: number): void {
    this.charServ.deleteCharacter(charId).subscribe(() => this.loadCharacters());
  }

  loadCharacters(): void {
    this.charServ.getCharacterAll().subscribe(res => {
      this.characters = res;
    });
  }

}
