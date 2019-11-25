import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() character: Character = new Character();
  @Output() save = new EventEmitter();

  constructor(
  ) {
  }

  ngOnInit() {
  }


  saveState() {
    this.save.emit();
  }
}
