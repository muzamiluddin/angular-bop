import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Transaction } from 'src/app/interfaces/transaction.model';


const getTransactionState = createFeatureSelector<Transaction>('transaction');

export const getCurrentStep = createSelector(
    getTransactionState,
    state => {
        console.log ('Inside of get current step selector');
        return state.currentStep;
    }
);
