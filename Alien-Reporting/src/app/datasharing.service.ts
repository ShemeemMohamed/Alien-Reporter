import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  param: any;
  endPoint: string;
  restItems: any;

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.endPoint)
      .pipe(map(resp => resp));
  }

}
