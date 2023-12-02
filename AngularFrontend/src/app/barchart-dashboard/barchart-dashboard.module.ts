import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    BarchartDashboardComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ]
})
export class BarchartDashboardModule { }
