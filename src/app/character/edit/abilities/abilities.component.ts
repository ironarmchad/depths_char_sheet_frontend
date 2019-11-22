import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../../_models/character';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  @Input() character: Character;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  saveState() {
    this.save.emit()
  }

}
