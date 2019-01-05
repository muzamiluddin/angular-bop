import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/shared/services/http-config.service';
import { Observable } from 'rxjs';
import { AccountUtil } from './account-util.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpConfigService) {

  }

  // Returns metadata
  getMetadata(): Observable<any> {
    return this.http.getMetadata();
  }

  createAccountSubmission(account): Observable<any> {
    const body = AccountUtil.getCreateAccountSubmissionPayload(account);
    return this.http.post(body, '/gateway/bopsubmission');
  }


}
