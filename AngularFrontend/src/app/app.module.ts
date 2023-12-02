import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {ChartComponent} from './chart/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgChartsAngularModule} from 'ag-charts-angular';
import  {BarchartDashboardModule} from './barchart-dashboard/barchart-dashboard.module'
import  {HomeDashboardModule} from './home-dashboard/home-dashboard.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BarchartDashboardModule,
    HomeDashboardModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
