import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NaturalAbility} from '../../../../_models/ability';

@Component({
  selector: 'app-natural-ability',
  templateUrl: './natural-ability.component.html',
  styleUrls: ['./natural-ability.component.scss']
})
export class NaturalAbilityComponent implements OnInit {
  @Input() naturalAbility: NaturalAbility;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index)
  }

}
