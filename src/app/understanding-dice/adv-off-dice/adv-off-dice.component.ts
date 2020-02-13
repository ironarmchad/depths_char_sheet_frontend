import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ColorsService} from '../../_services/colors.service';

@Component({
  selector: 'app-adv-off-dice',
  templateUrl: './adv-off-dice.component.html',
  styleUrls: ['./adv-off-dice.component.scss']
})
export class AdvOffDiceComponent implements OnInit {
  @ViewChild('offAdvChart', {static: true}) private offAdvChartRef;
  offAdvChart: any;
  rolls = [1, 2, 3, 4, 5, 6];
  offAdvStatDiff = ['-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4', '+5'];
  offAdvRates = this.offAdvStatDiff.map(statDiff => {
    return this.findOffAdvRate(parseInt(statDiff, 10));
  });

  constructor(private colors: ColorsService) {
  }

  ngOnInit() {
    this.offAdvChart = new Chart(this.offAdvChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.offAdvStatDiff,
        datasets: [{
          data: this.offAdvRates,
          backgroundColor: this.colors.midnightPurple
        }]
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

  findOffAdvRate(statDiff: number): number {
    let success = 0;
    let tries = 0;
    this.rolls.forEach(off1Roll => {
      this.rolls.forEach(off2Roll => {
        this.rolls.forEach(defRoll => {
          const offValue = Math.max(off1Roll, off2Roll);
          tries++;
          if (defRoll !== this.rolls[this.rolls.length - 1] && offValue !== this.rolls[0]) {
            if (defRoll === this.rolls[0] || offValue === this.rolls[this.rolls.length - 1]) {
              success++;
            } else if (offValue + statDiff > defRoll) {
              success++;
            }
          }
        });
      });
    });
    return success / tries;
  }

}
