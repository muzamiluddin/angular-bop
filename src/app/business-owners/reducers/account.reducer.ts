import { ActionType } from '../enums/action-type';
import { Account } from '../../interfaces/account.model';
import { AccountState } from '../app.state';

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

export function AccountReducer(state: AccountState = initialState, action): AccountState {
    console.log('********Received an event******');
    console.log('State: ' + JSON.stringify(state));
    console.log('Paload: ' + action.payload);

    switch (action.type) {
        case ActionType.ACCOUNT_UPDATED:
            state.account.name = state.account.name + 'account updated';
            return state;
        default:
            console.log('processing event');
            state.account.name = state.account.name + ' awesome';
            return state;
    }
}
