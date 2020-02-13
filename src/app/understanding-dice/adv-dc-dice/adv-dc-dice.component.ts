import {Component, OnInit, ViewChild} from '@angular/core';
import {ColorsService} from '../../_services/colors.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-adv-dc-dice',
  templateUrl: './adv-dc-dice.component.html',
  styleUrls: ['./adv-dc-dice.component.scss']
})
export class AdvDcDiceComponent implements OnInit {
  @ViewChild('advChart', {static: true}) private advChartRef;
  advChart: any;
  dcStatDiff = ['+1', '+2', '+3', '+4', '+5', '+6', '+7'];
  rolls = [1, 2, 3, 4, 5, 6];
  dcRates = this.dcStatDiff.map(statDiff => {
    return this.findDcRate(parseInt(statDiff, 10));
  });

  constructor(private colors: ColorsService) {
  }

  ngOnInit() {
    this.advChart = new Chart(this.advChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.dcStatDiff,
        datasets: [{
          data: this.dcRates,
          backgroundColor: this.colors.midnightPurple
        }]
      },
      options: {
        legend: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Difference between difficulty class and stat.',
              fontSize: 16
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 1,
            },
            scaleLabel: {
              display: true,
              labelString: 'Success Rate',
              fontSize: 16
            }
          }]
        }
      }
    });
  }

  findDcRate(statDiff: number): number {
    let success = 0;
    let tries = 0;
    this.rolls.forEach(roll => {
      tries++;
      if (roll === this.rolls[this.rolls.length - 1]) {
        success++;
      } else if (roll !== this.rolls[0] && statDiff <= roll) {
        success++;
      }
    });
    return success / tries;
  }

}
