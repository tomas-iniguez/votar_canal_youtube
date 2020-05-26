import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  loading = true;
  error  = false;
  menssError = 'Por favor intentelo nuevamente';

  results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Videos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = {
    domain: ['#007bff', '#dc3545']
  };

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('youtube').valueChanges().
     pipe(map( (resp: any) => resp.map( ({ title, like, dislike }) => ( { name: title, series: [{name: 'like', value: like }, {name: 'dislike', value: dislike }]   } )  )  ))
     .subscribe( resp =>  {
       this.results = resp;
       this.loading = false;
      }, ( respError => {
        this.error = true;
        this.loading = false;
         })
      );
  }

}
