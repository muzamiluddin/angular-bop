import { ActionType } from '../enums/action-type';
import { Account } from '../../interfaces/account.model';
import { AccountState, AppState } from '../app.state';
import { AccountActions, AccountActionTypes } from '../actions/account.actions';
import { ScreenActions, ScreenActionTypes } from '../actions/screen.actions';

const initialState: AppState =  {
    currentStep: 'Home',
    displayLeftNav: false
};

export function ScreenReducer(state: AppState = initialState, action: ScreenActions): AppState {
    switch (action.type) {
        case ScreenActionTypes.BusinessInfoLoad:
            console.log('State: ' + JSON.stringify(state));
            console.log(' Loading Business Info component ');
            return state;
        case ScreenActionTypes.EligibilityLoad:
            console.log('State: ' + JSON.stringify(state));
            console.log('Inside of Eligibilty Load');
            return state;
    }
}
