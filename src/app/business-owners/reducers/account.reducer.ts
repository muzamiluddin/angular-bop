import { ActionType } from '../enums/action-type';
import { Account, NEW_ACCOUNT } from '../../interfaces/account.model';
import { AccountState } from '../app.state';
import { AccountActions, AccountActionTypes } from '../actions/account.actions';

const initialState: AccountState = {
    account: NEW_ACCOUNT,
};

export function AccountReducer(state = initialState, action: AccountActions): AccountState {

    switch (action.type) {
        default:
            return state;
    }
}
