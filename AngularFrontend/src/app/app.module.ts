import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import {ChartComponent} from './chart/chart/chart.component';
import {AddressFormComponent } from './address-form/address-form.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgChartsAngularModule} from 'ag-charts-angular';
import  {BarchartDashboardModule} from './barchart-dashboard/barchart-dashboard.module'
import  {HomeDashboardModule} from './home-dashboard/home-dashboard.module'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PieChartComponent } from './piechart/piechart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChartComponent,
    AddressFormComponent,
    HeaderComponent,
    PieChartComponent
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {


}
