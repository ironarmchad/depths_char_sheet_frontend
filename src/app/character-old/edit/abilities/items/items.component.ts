import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../../../../_models/ability';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.index);
  }

}
