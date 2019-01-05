
import { ActionType } from '../enums/action-type';

export function SubmissionReducer(state, action) {
    switch (action.type) {
        case ActionType.ACCOUNT_UPDATED:
            state.name = state.name + 'account updated';
            return state;
        default:
            console.log('processing event');
            state.name = state.name + ' awesome';
            return state;
    }
}
