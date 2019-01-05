import { ActionType } from '../enums/action-type';
import { Account } from '../../interfaces/account.model';
import { AccountState } from '../app.state';
import { AccountActions, AccountActionTypes } from '../actions/account.actions';

const initialState: AccountState = {
    account: {
            name: '',
            address: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: ''
            },
            email: '',
            phone: '',
            fein: '',
            organizationType: '',
            industryCode: ''
    }
};

export function AccountReducer(state: AccountState = initialState, action: AccountActions): AccountState {

    switch (action.type) {
        case AccountActionTypes.CreateAccount:
            console.log('Inside of create account action');
            console.log('State: ' + JSON.stringify(state));
            console.log('Paload: ' + action.payload);
            state.account.name = state.account.name + 'account updated';
            return state;
        case AccountActionTypes.CreateAccountSuccess:
            console.log('Inside of create account success action');
            console.log('State: ' + JSON.stringify(state));
            console.log('Paload: ' + action.payload);
            state.account.name = state.account.name + 'success';
            return state;
        default:
            console.log('Inside of default action');
            console.log('State: ' + JSON.stringify(state));
            console.log('Paload: ' + action.payload);
            state.account.name = state.account.name + ' awesome';
            return state;
    }
}
