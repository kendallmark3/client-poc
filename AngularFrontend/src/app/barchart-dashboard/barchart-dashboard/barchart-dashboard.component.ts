import { Component } from '@angular/core';
import {GraficoModel} from '../../Model/grafico.model'

@Component({
  selector: 'app-barchart-dashboard',
  templateUrl: './barchart-dashboard.component.html',
  styleUrls: ['./barchart-dashboard.component.scss']
})
export class BarchartDashboardComponent {

  title = 'New Sprint Projections';

  public People: Array<GraficoModel> = [
    {Value: 350, Color:'#498B94', Size:'', Legend:'Devs'},
    {Value: 2000, Color:'#F8C622', Size:'', Legend:'Testers'},
    {Value: 1000, Color:'#747474', Size:'', Legend:'Analyst'},
    {Value: 500, Color:'#EC972D', Size:'', Legend:'Product Owner'},
  ];

}
