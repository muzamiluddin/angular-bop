import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic c3U6Z3c='
  })
};

const pcURL = 'http://localhost:8180/pc/service/edge'

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  constructor(private http: HttpClient) { }

  getMetadata(): Observable<any> {
    const body = {
      'id': '1',
      'method': 'getMetaData',
      'params': [],
      'jsonrpc': '2.0'
    }
    return this.http.post(pcURL, body, httpOptions);
  }

  post(body, capability): Observable<any> {
    return this.http.post(pcURL + capability, body, httpOptions);
  }

}
