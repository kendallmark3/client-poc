import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-productivity-chart',
  templateUrl: './productivity-chart.component.html',
  styleUrls: ['./productivity-chart.component.scss']
})
export class ProductivityChartComponent implements OnInit {
  productivityForm: any;
  chart: any;
  chartData: number[] = [];
  totalInput: number = 0;

  ngOnInit(): void {
    this.productivityForm = new FormGroup(
      { totalInput: new FormControl(),
        totalOutput: new FormControl(),
      }
    )
    this.buildChart(); // Initialize the chart on component initialization
  }

  buildChart(): void {
    this.chart = new Chart('chartCanvas', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Productivity',
          data: this.chartData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  updateChart(): void {
    this.chart.update();
  }

  onSubmit(): void {
    // Process form data and update the chart data
    // Example: assuming the total output value is retrieved from the form control named 'totalOutput'
    const totalOutputValue = this.productivityForm.get('totalOutput').value;
    const totalInput = this.productivityForm.get('totalInput').value;

  
    // Calculate productivity (total output divided by total input)
    const productivity = totalOutputValue / totalInput;

    console.log(productivity);
  
    // Add the new productivity value to the chart data
    this.chartData.push(productivity);
  
    // Add the corresponding label for the productivity value
    const label = new Date().toLocaleTimeString();
    this.chart.data.labels.push(label);
  
    this.updateChart();
  }
}