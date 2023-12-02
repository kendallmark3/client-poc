import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GraficoBarrasComponent } from '../grafico-barras/grafico-barras.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    BarchartDashboardComponent,
    GraficoBarrasComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule

  ]
})
export class BarchartDashboardModule { }
