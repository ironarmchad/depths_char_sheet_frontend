import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {

  constructor(
    private charServ: CharacterService,
    private current: CurrentCharacterService,
  ) {
  }

  ngOnInit() {
  }

  // This method is in place in case I need to do some processing before a save
  saveChar(): void {
    this.current.patchCharacter();
  }

  ngOnDestroy(): void {
    this.saveChar();
  }

  levelUp(stat: string): void {
    const beforePoints = this.current.character.stats.pointTotal;

    this.current.character.stats[stat.toLowerCase()] += 1;

    this.current.character.stats.xpCurrent += this.current.character.stats.pointTotal - beforePoints;

    this.saveChar();
  }

  levelDown(stat: string): void {
    const beforePoints = this.current.character.stats.pointTotal;

    this.current.character.stats[stat.toLowerCase()] -= 1;

    this.current.character.stats.xpCurrent += this.current.character.stats.pointTotal - beforePoints;

    this.saveChar();
  }

}
