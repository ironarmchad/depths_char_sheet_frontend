import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-super-abilities',
  templateUrl: './super-abilities.component.html',
  styleUrls: ['./super-abilities.component.scss']
})
export class SuperAbilitiesComponent implements OnInit, OnDestroy {

  constructor(
    private current: CurrentCharacterService,
    private charServ: CharacterService,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.charServ.patchCharacter(this.current.character).subscribe();
  }

  useFp(fpUse: number): void {
    this.current.character.stats.fpCurrent -= fpUse;
  }
}
