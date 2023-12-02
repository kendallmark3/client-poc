import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GraficoBarrasComponent } from '../grafico-barras/grafico-barras.component';




@NgModule({
  declarations: [
    BarchartDashboardComponent,
    GraficoBarrasComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,

  ]
})
export class BarchartDashboardModule { }
