import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-natural-abilities',
  templateUrl: './natural-abilities.component.html',
  styleUrls: ['./natural-abilities.component.scss']
})
export class NaturalAbilitiesComponent implements OnInit, OnDestroy {

  constructor(
    private current: CurrentCharacterService,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.current.patchCharacter();
  }

}
