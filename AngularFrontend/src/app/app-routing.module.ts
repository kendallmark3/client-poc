import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent  } from './about/about.component';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard/barchart-dashboard.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard/home-dashboard.component';
import {ChartComponent} from './chart/chart/chart.component';
import { AddressFormComponent } from './address-form/address-form.component';
import {PieChartComponent} from './piechart/piechart.component'
import { MapboxComponent } from './mapbox/mapbox.component';
import {BmiCalculatorComponent} from './bmi-calculator/bmi-calculator.component'
import {ProductivityChartComponent} from './productivity-chart/productivity-chart.component'
import {DiceRollerComponent } from './dice-roller/dice-roller.component'
import {OpenAIComponentComponent} from './open-aicomponent/open-aicomponent.component'
import {ProfilePageComponent} from './profile-page/profile-page.component'
import {MatixfunComponent} from './matixfun/matixfun.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeDashboardComponent },
  { path: 'barchart', component: BarchartDashboardComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'form', component: AddressFormComponent },
  { path: 'piechart', component: PieChartComponent },
  { path: 'map', component: MapboxComponent },
  { path: 'bmi', component: BmiCalculatorComponent},
  { path: 'product', component: ProductivityChartComponent},
  { path: 'dice', component: DiceRollerComponent},
  { path: 'openai', component: OpenAIComponentComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'matrix', component: MatixfunComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
