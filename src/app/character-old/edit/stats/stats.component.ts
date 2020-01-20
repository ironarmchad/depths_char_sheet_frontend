import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stats} from '../../../_models/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() stats: Stats;
  @Output() save = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  saveState() {
    this.save.emit();
  }

}
