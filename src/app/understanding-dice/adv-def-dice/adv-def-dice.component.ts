import {Component, OnInit, ViewChild} from '@angular/core';
import {ColorsService} from '../../_services/colors.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-adv-def-dice',
  templateUrl: './adv-def-dice.component.html',
  styleUrls: ['./adv-def-dice.component.scss']
})
export class AdvDefDiceComponent implements OnInit {
  @ViewChild('defChart', {static: true}) private defChartRef;
  defChart: any;
  rolls = [1, 2, 3, 4, 5, 6];
  defStatDiff = ['-4', '-3', '-2', '-1', '0', '+1', '+2', '+3', '+4', '+5'];
  defAdvRates = this.defStatDiff.map(statDiff => {
    return this.findRates(parseInt(statDiff, 10));
  });

  constructor(private colors: ColorsService) {
  }

  ngOnInit() {
    this.defChart = new Chart(this.defChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.defStatDiff,
        datasets: [{
          data: this.defAdvRates,
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

  findRates(statDiff: number): number {
    let success = 0;
    let tries = 0;
    this.rolls.forEach(offRoll => {
      this.rolls.forEach(def1Roll => {
        this.rolls.forEach(def2Roll => {
          const defValue = Math.max(def1Roll, def2Roll);
          tries++;
          if (defValue !== this.rolls[this.rolls.length - 1] && offRoll !== this.rolls[0]) {
            if (defValue === this.rolls[0] || offRoll === this.rolls[this.rolls.length - 1]) {
              success++;
            } else if (offRoll + statDiff > defValue) {
              success++;
            }
          }
        });
      });
    });
    return success / tries;
  }

}
