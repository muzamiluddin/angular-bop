import { Account } from '../interfaces/account.model';
import { Submission } from '../interfaces/submission.model';

export interface AccountState {
    account: Account;
}

export interface AppState {
    account: AccountState;
    submission: Submission;
    currentStep: string;
    displayLeftNav: boolean;
}

