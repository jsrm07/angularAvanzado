import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {
// Doughnut
@Input() public doughnutChartLabels: Label[] = [];
@Input() public doughnutChartData: MultiDataSet = [];
@Input() public doughnutChartType: string = '';



  constructor() { }

  ngOnInit() {
  }

}
