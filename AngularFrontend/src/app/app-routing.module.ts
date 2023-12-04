import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent  } from './about/about.component';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard/barchart-dashboard.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard/home-dashboard.component';
import {ChartComponent} from './chart/chart/chart.component';
import { AddressFormComponent } from './address-form/address-form.component';
import {PieChartComponent} from './piechart/piechart.component'
import { MapboxComponent } from './mapbox/mapbox.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeDashboardComponent },
  { path: 'barchart', component: BarchartDashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form', component: AddressFormComponent },
  { path: 'piechart', component: PieChartComponent },
  { path: 'map', component: MapboxComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
