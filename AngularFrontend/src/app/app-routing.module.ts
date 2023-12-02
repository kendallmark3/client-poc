import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent  } from './about/about.component';
import { BarchartDashboardComponent } from './barchart-dashboard/barchart-dashboard/barchart-dashboard.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeDashboardComponent },
  { path: 'barchart', component: BarchartDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
