import { Component } from '@angular/core';

@Component({
  selector: 'app-matixfun',
  template: `
<div>
<h2>Matrix Array Experiment</h2>
<label for="searchNumber">Enter number to find:</label>
<input type="number" id="searchNumber" [(ngModel)]="numberToFind">
<button (click)="findNumber()">Find Number</button>
<br>
<div *ngFor="let row of matrix">
<div *ngFor="let col of row">
{{ col }}
</div>
</div>
</div>
`
})
export class MatixfunComponent {
  matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    numberToFind: number;
    
    findNumber() {
    if (this.numberToFind) {
    for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
    if (this.matrix[i][j] === this.numberToFind) {
    console.log(`Number ${this.numberToFind} found at position [${i}][${j}]`);
    return;
    }
    }
    }
    console.log(`Number ${this.numberToFind} not found in the matrix`);
    } else {
    console.log('Please enter a number to find');
    }
    }

}
