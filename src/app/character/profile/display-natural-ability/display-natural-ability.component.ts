import {Component, Input, OnInit} from '@angular/core';
import {NaturalAbility} from '../../../_models/ability';

@Component({
  selector: 'app-display-natural-ability',
  templateUrl: './display-natural-ability.component.html',
  styleUrls: ['./display-natural-ability.component.scss']
})
export class DisplayNaturalAbilityComponent implements OnInit {
  @Input() naturalAbility: NaturalAbility;

  constructor() {
  }

  ngOnInit() {
  }

}
