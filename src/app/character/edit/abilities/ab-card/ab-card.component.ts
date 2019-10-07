import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ability} from '../../../../_models/ability';

@Component({
  selector: 'app-ab-card',
  templateUrl: './ab-card.component.html',
  styleUrls: ['./ab-card.component.scss']
})
export class AbCardComponent implements OnInit {
  @Input() ability: Ability;
  @Output() editEmit = new EventEmitter<Ability>();
  @Output() deleteEmit = new EventEmitter<Ability>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit() {
    this.editEmit.emit(this.ability);
  }

  onDelete() {
    this.deleteEmit.emit(this.ability);
  }
}
