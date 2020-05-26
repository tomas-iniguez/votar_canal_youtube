import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiFireBaseService {

  constructor(private http: HttpClient) { }

  getVotar(voto: any) {
    console.log(voto);
     return this.http.post(`${ environment.urlApiFireBase }/youtube`, voto);
  }
}
