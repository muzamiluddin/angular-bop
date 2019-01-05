import { Account } from '../interfaces/account.model';
import { Submission } from '../interfaces/submission.model';

export interface AccountState {
    account: Account;
}

export interface AppState {
    currentStep: string;
    displayLeftNav: boolean;
}

