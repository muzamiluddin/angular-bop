import { Injectable } from '@angular/core';
import { HttpConfigService } from 'src/app/shared/services/http-config.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpConfigService) { 

  }

  getMetadata() : Observable<any>{
    return this.http.getMetadata()
  }

  createAccountSubmission(account) : Observable<any>{
    var currentDay = moment(new Date()).format("YYYY-MM-DD")
    // Get current date
    var body = {
      "id": "17",
      "method": "createBOPAccountAndSubmission",
      "params": [{
        "account": {
          "isNewAccount": true,
          "accountHolder": {
            "subtype" : "Company",
            "fEINOfficialID": account.fein,
            "contactName": account.name,
            "workNumber": account.phone,
            "emailAddress1": account.email,
            "primaryAddress": {
              "addressLine1": account.address.addressLine1,
              "addressLine2": account.address.addressLine2,
              "city": account.address.city,
              "state": account.address.state,
              "postalCode": account.address.postalCode,
              "country": "US",
              "isPrimary": true,
              "isMailing": true
            },
            "accountHolder": true,
          },
          "organizationType": account.organizationType,
          "industryCode": account.industryCode,
        }, 
      "submission" : {
        "productCode": "BusinessOwners",
        "state": account.address.state,
        "country": "US",
        "effectiveDate": currentDay,
        "producerCode": "PROD001"
      }
        
      }],
      "jsonrpc": "2.0"
    }
    return this.http.post(body, '/gateway/bopsubmission')
  }


}
