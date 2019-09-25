import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stat-buttons',
  templateUrl: './stat-buttons.component.html',
  styleUrls: ['./stat-buttons.component.scss']
})
export class StatButtonsComponent implements OnInit {
  @Input() stat: string;
  @Output() value = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onButtonGroupClick($event) {
    const clickedElement = $event.target;

    if (clickedElement.nodeName === 'BUTTON') {

      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
      this.value.emit(clickedElement.textContent);
    }
  }
}
