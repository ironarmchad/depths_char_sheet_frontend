import {Component, Input, OnInit} from '@angular/core';
import {StatAbility} from '../../../_models/ability';

@Component({
  selector: 'app-display-stat-ability',
  templateUrl: './display-stat-ability.component.html',
  styleUrls: ['./display-stat-ability.component.scss']
})
export class DisplayStatAbilityComponent implements OnInit {
  @Input() statAbility: StatAbility;

  constructor() {
  }

  ngOnInit() {
  }

}
