import { Component, OnInit } from '@angular/core';
import {PointBuyComponent} from './point-buy/point-buy.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DirectEditComponent} from './direct-edit/direct-edit.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openPointBuy() {
    this.modalService.open(PointBuyComponent, {size: 'lg'});
  }

  openDirectEdit() {
    this.modalService.open(DirectEditComponent, {size: 'lg'});
  }

}
