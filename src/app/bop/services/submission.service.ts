import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/shared/services/http-config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpConfigService) { 

  }

  getMetadata() : Observable<any>{
    return this.http.getMetadata()
  }


}
