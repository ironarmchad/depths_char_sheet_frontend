import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Character} from '../../../_models/character';
import {CharacterService} from '../../../_services/character.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() character: Character;
  @Output() save = new EventEmitter();

  constructor(
    private charServ: CharacterService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  saveState() {
    this.save.emit();
  }
}
