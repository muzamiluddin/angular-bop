import { Action } from '@ngrx/store';

export enum AccountActionTypes {
    UpdateAccount = '[Account] Update Account',
    CreateAccount = '[Account] Create Account',
    UpdateAccountSuccess = '[Account] Update Account Success',
    UpdateAccountFailure = '[Account] Update Account Failure',
    CreateAccountSuccess = '[Account] Create Account Success',
    CreateAccountFailure = '[Account] Create Account Failure'
}

export class UpdateAccount implements Action {
     readonly type = AccountActionTypes.UpdateAccount;
     constructor(public payload: Account) {

     }
}

export class CreateAccount implements Action {
    readonly type = AccountActionTypes.CreateAccount;
    constructor(public payload: Account) {

    }
}

export class UpdateAccountSuccess implements Action {
    readonly type = AccountActionTypes.UpdateAccountSuccess;
    constructor (public payload: Account) {

    }
}

export class UpdateAccountFailure implements Action {
    readonly type = AccountActionTypes.CreateAccountFailure;
    constructor (public payload: Account) {

    }
}

export class CreateAccountSuccess implements Action {
    readonly type = AccountActionTypes.CreateAccountSuccess;
    constructor (public payload: Account) {

    }
}

export class CreateAccountFailure implements Action {
    readonly type = AccountActionTypes.CreateAccountFailure;
    constructor (public payload: any) {

    }
}

export type AccountActions = CreateAccount |
    UpdateAccount |
    CreateAccountSuccess |
    CreateAccountFailure |
    UpdateAccountSuccess  |
    UpdateAccountFailure;





