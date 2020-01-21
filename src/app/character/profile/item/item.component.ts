import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

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

  useFp(fpUsed: number): void {
    this.current.character.stats.fpCurrent -= fpUsed;
  }

}
