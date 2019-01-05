import { Injectable } from '@angular/core';
import { SubmissionService } from 'src/app/bop/services/submission.service';
import { ActionType } from '../enums/action-type';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { AccountReducer } from '../reducers/account.reducer';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountActionTypes, UpdateAccount } from '../actions/account.actions';

@Injectable()
export class AccountEffects {


}
