import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuperAbility} from '../../../_models/ability';

@Component({
  selector: 'app-display-super-ability',
  templateUrl: './display-super-ability.component.html',
  styleUrls: ['./display-super-ability.component.scss']
})
export class DisplaySuperAbilityComponent implements OnInit {
  @Input() superAbility: SuperAbility;
  @Output() useAbility = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onUseAbility() {
    this.useAbility.emit(this.superAbility.fpUse);
  }

}
