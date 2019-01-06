import { Injectable } from '@angular/core';
import { Account, NEW_ACCOUNT } from '../../interfaces/account.model';
import * as moment from 'moment';
import { MatCalendarBody } from '@angular/material';
import { Transaction, NEW_TRANSACTION } from 'src/app/interfaces/transaction.model';
import { NEW_SUBMISSION, Submission } from 'src/app/interfaces/submission.model';

@Injectable({
    providedIn: 'root'
})
export class SubmissionUtil {

  constructor() {

  }

  static getTransactionFromPayload(resp: any): Transaction {
    const transaction = NEW_TRANSACTION;

    // Map Account
    const baseData = resp.result.baseData;
    let account: Account = NEW_ACCOUNT;
    account = this.mapAccountFromBaseData(account, baseData);
    account.organizationType = resp.result.lobData.businessOwners.accountOrgType; // Edge mapping to be corrected

    // Map Submission
    let submission: Submission = NEW_SUBMISSION;
    submission = this.mapSubmissionFromResponse(submission, resp.result);

    transaction.account = account;
    transaction.submission = submission;
    transaction.sessionUUID = resp.result.sessionUUID;
    return transaction;
  }

  static mapAccountFromBaseData(account: Account, baseData: any): Account {
    account.name = baseData.accountHolder.contactName;
    account.accountNumber = baseData.accountNumber;
    account.address = baseData.accountHolder.primaryAddress;
    account.displayName = baseData.accountHolder.displayName;
    account.subtype = baseData.accountHolder.subtype;
    account.phone = baseData.accountHolder.workNumber;
    account.email = baseData.accountHolder.emailAddress1;
    // TODO: Map FEIN
    // TODO: Map IndustryCode
    // TODO: Map PublicID
    return account;
  }

  static mapSubmissionFromResponse(submission: Submission, result: any): Submission {
    submission.periodStartDate = result.baseData.periodStartDate;
    submission.periodEndDate = result.baseData.periodEndDate;
    submission.productCode =  result.baseData.productCode;
    submission.productName = result.baseData.productName;
    submission.status = result.baseData.periodStatus;
    submission.policyAddress = result.baseData.policyAddress;
    submission.preQualQuestionSets = result.lobData.businessOwners.preQualQuestionSets;
    submission.coverages = result.lobData.businessOwners.coverages;
    submission.coverables = result.lobData.businessOwners.coverables;
    return submission;
  }
}
