import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from '../../../_services/character.service';
import {CurrentCharacterService} from '../_current-character.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stats-point-buy',
  templateUrl: './stats-point-buy.component.html',
  styleUrls: ['./stats-point-buy.component.scss']
})
export class StatsPointBuyComponent implements OnInit, OnDestroy {

  constructor(
    private current: CurrentCharacterService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.current.character.stats.method = null;
    this.current.character.stats.xpCurrent = 0;
  }

  save(method: string): void {
    this.current.character.stats.method = method;
    this.router.navigate(['character', this.current.character.id, 'stats']);
  }

  ngOnDestroy(): void {
    if (!this.current.character.stats.method) {
      this.current.character.stats.method = 'Point Buy';
    }

    this.current.patchCharacter();
  }

}
