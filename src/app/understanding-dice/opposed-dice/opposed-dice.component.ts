import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ColorsService} from '../../_services/colors.service';

@Component({
  selector: 'app-opposed-dice',
  templateUrl: './opposed-dice.component.html',
  styleUrls: ['./opposed-dice.component.scss']
})
export class OpposedDiceComponent implements OnInit {
  @ViewChild('opposedChart', {static: true}) private opposedChartRef;
  chart: any;
  statDiff = ['-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4', '+5'];
  rolls = [1, 2, 3, 4, 5, 6];
  opposedRates = this.statDiff.map(statDiff => {
    return this.findRate(parseInt(statDiff, 10));
  });

  constructor(private colors: ColorsService) {
  }

  ngOnInit() {
    this.chart = new Chart(this.opposedChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.statDiff,
        datasets: [
          {
            data: this.opposedRates,
            backgroundColor: this.colors.midnightPurple
          }
        ]
      },
      options: {
        legend: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Difference between initiator and defenders stat.',
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

  findRate(statDiff: number): number {
    let successes = 0;
    let tries = 0;
    this.rolls.forEach(offence => {
      this.rolls.forEach(defence => {
        tries++;
        if (defence !== this.rolls[this.rolls.length - 1] && offence !== this.rolls[0]) {
          if (defence === this.rolls[0] || offence === this.rolls[this.rolls.length - 1]) {
            successes++;
          } else if (offence + statDiff > defence) {
            successes++;
          }
        }
      });
    });
    return successes / tries;
  }


}
