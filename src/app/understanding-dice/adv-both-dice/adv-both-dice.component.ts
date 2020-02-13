import {Component, OnInit, ViewChild} from '@angular/core';
import {ColorsService} from '../../_services/colors.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-adv-both-dice',
  templateUrl: './adv-both-dice.component.html',
  styleUrls: ['./adv-both-dice.component.scss']
})
export class AdvBothDiceComponent implements OnInit {
  @ViewChild('chart', {static: true}) private chartRef;
  chart: any;
  rolls = [1, 2, 3, 4, 5, 6];
  statDiff = ['-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4', '+5'];
  rates = this.statDiff.map(statDiff => {
    return this.findRate(parseInt(statDiff, 10));
  });

  constructor(private colors: ColorsService) {
  }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.statDiff,
        datasets: [{
          data: this.rates,
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
            scalesLabel: {
              display: true,
              labelString: 'SuccessRate',
              fontSize: 16
            }
          }]
        }
      }
    });
  }

  findRate(statDiff: number): number {
    let success = 0;
    let tries = 0;
    this.rolls.forEach(off1Roll => {
      this.rolls.forEach(off2Roll => {
        this.rolls.forEach(def1Roll => {
          this.rolls.forEach(def2Roll => {
            const offValue = Math.max(off1Roll, off2Roll);
            const defValue = Math.max(def1Roll, def2Roll);
            tries++;

            if (defValue !== this.rolls[this.rolls.length - 1] && offValue !== this.rolls[0]) {
              if (defValue === this.rolls[0] || offValue === this.rolls[this.rolls.length - 1]) {
                success++;
              } else if (offValue + statDiff > defValue) {
                success++;
              }
            }
          });
        });
      });
    });
    return success / tries;
  }

}
