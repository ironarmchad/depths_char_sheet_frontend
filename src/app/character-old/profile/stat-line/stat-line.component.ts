import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat-line',
  templateUrl: './stat-line.component.html',
  styleUrls: ['./stat-line.component.scss']
})
export class StatLineComponent implements OnInit {
  @Input() statName: string;
  @Input() statValue: number;

  constructor() { }

  ngOnInit() {
  }

}
