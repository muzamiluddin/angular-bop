import { Submission, NEW_SUBMISSION } from './submission.model';
import { Account, NEW_ACCOUNT } from './account.model';
import { Address } from './address.model';
import { Step } from '../business-owners/enums/step';

export interface Transaction {
    account: Account;
    submission: Submission;
    sessionUUID: string;
    currentStep: Step;
}

export const NEW_TRANSACTION: Transaction = {
    account:  NEW_ACCOUNT,
    submission: NEW_SUBMISSION,
    sessionUUID: '',
    currentStep: Step.BusinessInfo,
};

export interface AccountHolder {
    emailAddress1: string;
    publicID: string;
    displayName: string;
    workNumber: string;
    subtype: string;
    primaryAddress: Address;
    productCode: string;
    fEINOfficialID: string;
    producerCode: string;
}

export interface BaseData {
    accountNumber: string;
    accountHolder: AccountHolder;
    policyAddress: Address;
    productCode: string;
    productNmae: string;
    periodStartDate: string;
    periodEndDate: string;
}

// tslint:disable-next-line:no-empty-interface
export interface LobData {

}

// tslint:disable-next-line:no-empty-interface
export interface QuoteData {

}

export interface TransactionData {
    sessionUUID: string;
    quoteID: string;
    baseData: BaseData;
    lobData: LobData;
    quoteData: QuoteData;
}
