import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../../_current-character.service';
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

  ngOnDestroy(): void {
    this.saveChar();
  }

  saveChar(): void {
    this.charServ.patchCharacter(this.current.character).subscribe();
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
