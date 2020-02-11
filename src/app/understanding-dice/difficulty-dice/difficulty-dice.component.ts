import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ColorsService} from '../../_services/colors.service';

@Component({
  selector: 'app-difficulty-dice',
  templateUrl: './difficulty-dice.component.html',
  styleUrls: ['./difficulty-dice.component.scss']
})
export class DifficultyDiceComponent implements OnInit {
  @ViewChild('dcChart', {static: true}) private dcChartRef;
  chart: any;
  dcStatDiff = ['+1', '+2', '+3', '+4', '+5', '+6', '+7'];
  rolls = [2, 3, 4, 5];
  dcRates = this.dcStatDiff.map(statDiff => {
    return this.findRate(parseInt(statDiff.substr(1), 10));
  });

  constructor(private colors: ColorsService) { }

  ngOnInit() {
    this.chart = new Chart(this.dcChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.dcStatDiff,
        datasets: [
          {
            data: this.dcRates,
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
              labelString: 'Difference Between Difficulty Class and Stat',
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
    let successes = 1;
    this.rolls.forEach(roll => {
      if (statDiff <= roll) {
        successes++;
      }
    });
    return successes / (this.rolls.length + 2);
  }

}
