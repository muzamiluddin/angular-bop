
import { ActionType } from '../enums/action-type';
import { Account, NEW_ACCOUNT } from '../../interfaces/account.model';
import { AccountState } from '../app.state';
import { AccountActions, AccountActionTypes } from '../actions/account.actions';
import { NEW_SUBMISSION } from 'src/app/interfaces/submission.model';
import { Transaction, NEW_TRANSACTION } from 'src/app/interfaces/transaction.model';
import { TransactionActions, TransactionActionTypes } from '../actions/transaction.actions';
import { Step } from '../enums/step';

const initialState = NEW_TRANSACTION;

export function TransactionReducer(state = initialState, action: TransactionActions): Transaction {
    switch (action.type) {
        // Account & Submission actions
        case TransactionActionTypes.createAccountSubmissionSuccess:
            state.account = action.payload.account;
            state.submission = action.payload.submission;
            state.sessionUUID = action.payload.sessionUUID;
            state.currentStep = Step.Eligibility;
            console.log(' Updating current step to eligibility ');
            return { ...state };
        case TransactionActionTypes.createAccountSubmissionFailure:
            // TODO: To be handled
            console.log(' Error occured while account creation');
            return state;
        // Account actions
        case AccountActionTypes.CreateAccount:
            state.account = action.payload;
            return state;
        case AccountActionTypes.CreateAccountSuccess:
            return state;
        default:
            return state;
    }
}
