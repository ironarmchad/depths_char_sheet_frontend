import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../../../_models/character';
import {CharacterEditService} from '../_character-edit.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private editServ: CharacterEditService,
  ) {  }

  ngOnInit() {
    this.editServ.char.subscribe(char => this.character = char);
  }

  ngOnDestroy(): void {
    this.editServ.setCharacter(this.character);
  }
}
