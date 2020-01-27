import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnInit, OnDestroy {

  constructor(
    private current: CurrentCharacterService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.current.patchCharacter();
  }

}
