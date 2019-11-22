import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() character: Character;
  @Output() save = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  saveState() {
    this.save.emit();
  }

}
