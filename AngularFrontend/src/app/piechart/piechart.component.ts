import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PieChartComponent {
  pieChart: any;
  values: number[] = [4, 5, 6, 7, 8];
  labels: string[] = ['Devs', 'Scrumasters', 'SRE', 'PM', 'TPO'];
  
  constructor() { }
  
  ngOnInit(): void {
  this.createChart();
  console.log('Creating Pie Chart');
  }

  OnInit(): void{

  }
  
  createChart(): void {
  this.pieChart = new Chart('pieChart', {

  type: 'pie',
  data: {
  labels: this.labels,
  datasets: [{
  data: this.values,
  backgroundColor: [
  'rgba(255, 99, 132, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)'
  ]
  }]
  }
  });
  }
  
  updateChart(): void {
  this.pieChart.data.datasets[0].data = this.values;
  this.pieChart.update();
  }
  
  onSubmit(): void {
  this.updateChart();
  }
  }