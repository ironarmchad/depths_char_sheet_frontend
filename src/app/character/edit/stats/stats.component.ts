import { Component, OnInit } from '@angular/core';
import {PointBuyComponent} from './point-buy/point-buy.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
    const modalRef = this.modalService.open(PointBuyComponent, {size: 'lg'});
  }

}
