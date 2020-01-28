import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrentCharacterService} from '../_current-character.service';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(
    private current: CurrentCharacterService,
  ) {
    this.character = this.current.character;
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
