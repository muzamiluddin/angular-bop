import { Injectable } from '@angular/core';
import { SubmissionService } from 'src/app/bop/services/submission.service';
import { ActionType } from '../enums/action-type';
import { mergeMap, map, switchMap, catchError } from 'rxjs/operators';
import { AccountReducer } from '../reducers/account.reducer';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { AccountActionTypes, UpdateAccount, CreateAccountSuccess, AccountActions, CreateAccount, CreateAccountFailure } from '../actions/account.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BusinessInfoLoad } from '../actions/screen.actions';

@Injectable()
export class AccountEffects {

    constructor(private actions$: Actions,
                private submissionService: SubmissionService) {

    }

    @Effect()
    createAccount$: Observable<Action> = this.actions$.pipe(
        ofType(AccountActionTypes.CreateAccount),
        map((action: CreateAccount) => {
            return action.payload;
        }),
        mergeMap((account: Account) =>
           this.submissionService.createAccountSubmission(account).pipe(
                map(acc => {
                    console.log('Got response from server');
                    return new CreateAccountSuccess(acc);
                }),
                catchError(err => of(new CreateAccountFailure(err)))
           )
        )
    ); // pipe

}
