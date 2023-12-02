import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgChartsAngularModule} from 'ag-charts-angular';
import  {BarchartDashboardModule} from './barchart-dashboard/barchart-dashboard.module'
import  {HomeDashboardModule} from './home-dashboard/home-dashboard.module'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BarchartDashboardModule,
    HomeDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
