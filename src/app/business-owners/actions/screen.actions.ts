import { Action } from '@ngrx/store';

export enum ScreenActionTypes {
    BusinessInfoLoad = 'Business Info Load',
    EligibilityLoad = 'Eligibility Load'
}

export class BusinessInfoLoad implements Action {
     readonly type = ScreenActionTypes.BusinessInfoLoad;
}

export class EligibilityLoad implements Action {
    readonly type = ScreenActionTypes.EligibilityLoad;
}


export type ScreenActions = BusinessInfoLoad | EligibilityLoad;






