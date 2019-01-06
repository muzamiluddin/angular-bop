import { Action } from '@ngrx/store';
import { Account } from '../../interfaces/account.model';
import { Transaction } from 'src/app/interfaces/transaction.model';
import { AccountActions } from './account.actions';

export enum TransactionActionTypes {
    createAccountSubmission = '[AccountSubmission] Create Account & Submission',
    createAccountSubmissionSuccess = '[AccountSubmission] Create Account & Submission Success',
    createAccountSubmissionFailure = '[AccountSubmission] Create Account & Submission Failure',
}

export class CreateAccountSubmissionSuccess implements Action {
    readonly type = TransactionActionTypes.createAccountSubmissionSuccess;
    constructor(public payload: Transaction) {

    }
}

export class CreateAccountSubmissionFailure implements Action {
    readonly type = TransactionActionTypes.createAccountSubmissionFailure;
    constructor(public payload: any) {

    }
}

// TODO: Submission and other actions to be added to transaction actions
export type TransactionActions =  AccountActions | CreateAccountSubmissionSuccess | CreateAccountSubmissionFailure;


