import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account.model';
import * as moment from 'moment';
import { MatCalendarBody } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class AccountUtil {

  constructor() {

  }

  static getCreateAccountSubmissionPayload(account: Account): any {
    const currentDay = moment(new Date()).format('YYYY-MM-DD');
    // Get current date
    return {
      'id': '17',
      'method': 'createBOPAccountAndSubmission',
      'params': [{
        'account': {
          'isNewAccount': true,
          'accountHolder': {
            'subtype': 'Company',
            'fEINOfficialID': account.fein,
            'contactName': account.name,
            'workNumber': account.phone,
            'emailAddress1': account.email,
            'primaryAddress': {
              'addressLine1': account.address.addressLine1,
              'addressLine2': account.address.addressLine2,
              'city': account.address.city,
              'state': account.address.state,
              'postalCode': account.address.postalCode,
              'country': 'US',
              'isPrimary': true,
              'isMailing': true
            },
            'accountHolder': true,
          },
          'organizationType': account.organizationType,
          'industryCode': account.industryCode,
        },
        'submission': {
          'productCode': 'BusinessOwners',
          'state': account.address.state,
          'country': 'US',
          'effectiveDate': currentDay,
          'producerCode': 'PROD001'
        }

      }],
      'jsonrpc': '2.0'
    };

  }
}
