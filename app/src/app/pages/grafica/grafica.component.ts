import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  results: any[] = 
  [ 
    {
      "name": "Germany",
      "series": [
        {
          "name": "like",
          "value": 1111
        },
        {
          "name": "deslike",
          "value": 1
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "like",
          "value": 7870000
        },
        {
          "name": "deslike",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "like",
          "value": 5000002
        },
        {
          "name": "deslike",
          "value": 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'cantidad';

  colorScheme = {
    domain: ['#007bff', '#dc3545']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
