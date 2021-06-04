import { Component, OnInit } from '@angular/core';
// import { ChartType, ChartOptions } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor (private httpService: HttpClient) { }

    pieChartOptions = {
        responsive: true
    }

    pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  
    pieChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        { 
            data: []
        }
    ];
  
    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
            data => {
                this.pieChartData = data as any [];
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

    onChartClick(event) {
        console.log(event);
    }


}
