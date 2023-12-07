import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent {
  weight: number;
  age: number;
  bmi: number;

  calculateBMI() {
    const height = 1.8; // Assuming a constant height for demonstration purposes
    this.bmi = this.weight / (height * height);
  }
}