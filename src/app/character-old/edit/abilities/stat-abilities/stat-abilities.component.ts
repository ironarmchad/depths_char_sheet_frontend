import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatAbility} from '../../../../_models/ability';

@Component({
  selector: 'app-stat-abilities',
  templateUrl: './stat-abilities.component.html',
  styleUrls: ['./stat-abilities.component.scss']
})
export class StatAbilitiesComponent implements OnInit {
  @Input() statAbility: StatAbility;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index);
  }
}
