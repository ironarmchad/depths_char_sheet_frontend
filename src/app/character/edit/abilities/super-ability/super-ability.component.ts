import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SuperAbility} from '../../../../_models/ability';

@Component({
  selector: 'app-super-ability',
  templateUrl: './super-ability.component.html',
  styleUrls: ['./super-ability.component.scss']
})
export class SuperAbilityComponent implements OnInit {
  @Input() superAbility: SuperAbility;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index);
  }

}
