import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  Update = '[Account] Update Account'
}

export class UpdateAccount implements Action {
  readonly type = AccountActionTypes.Update;
  constructor(public payload: string) {
  }
}
