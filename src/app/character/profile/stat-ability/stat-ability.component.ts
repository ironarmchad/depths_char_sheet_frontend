import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-stat-ability',
  templateUrl: './stat-ability.component.html',
  styleUrls: ['./stat-ability.component.scss']
})
export class StatAbilityComponent implements OnInit, OnDestroy {

  constructor(
    private current: CurrentCharacterService,
    private charServ: CharacterService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.charServ.patchCharacter(this.current.character).subscribe();
  }



}
