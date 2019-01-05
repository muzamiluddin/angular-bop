import { ActionType } from '../enums/action-type';
import { Account, NEW_ACCOUNT } from '../../interfaces/account.model';
import { AccountState } from '../app.state';
import { AccountActions, AccountActionTypes } from '../actions/account.actions';

const initialState: AccountState = {
    account: NEW_ACCOUNT,
};

export function AccountReducer(state: AccountState = initialState, action: AccountActions): AccountState {

    switch (action.type) {
        case AccountActionTypes.CreateAccount:
            state.account.name = state.account.name + 'account updated';
            return state;
        case AccountActionTypes.CreateAccountSuccess:
            console.log(' Inside of reducer for setting account on success ');
            // state.account = action.payload;
            return state;
        default:
            state.account.name = state.account.name + ' awesome';
            return state;
    }
}
