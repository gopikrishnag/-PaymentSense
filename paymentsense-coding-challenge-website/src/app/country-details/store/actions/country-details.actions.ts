import { Action } from '@ngrx/store';
import { CountryDetails } from 'src/app/country-details/models/country-details.model';

export enum CountryDetailsActionTypes {
    GET_COUNTRY_DETAILS = '[COUNTRY_DETAILS] Get Country Details',
    GET_COUNTRY_DETAILS_SUCCESS = '[COUNTRY_DETAILS] Get Country Details Success',
    GET_COUNTRY_DETAILS_FAIL = '[COUNTRY_DETAILS] Get Country Details Fail',
}

/*
** Get ToDos
**/
export class GetCountryDetailsAction implements Action {
    readonly type = CountryDetailsActionTypes.GET_COUNTRY_DETAILS;
    constructor(public payload: string) { 
    }
}

export class GetCountryDetailsSuccessAction implements Action {
    readonly type = CountryDetailsActionTypes.GET_COUNTRY_DETAILS_SUCCESS;
    constructor(public payload: CountryDetails[]) { }
}

export class GetCountryDetailsFailAction implements Action {
    readonly type = CountryDetailsActionTypes.GET_COUNTRY_DETAILS_FAIL;
    constructor(public payload: any) { }
}



export type CountryDetailsAction =
    GetCountryDetailsAction |
    GetCountryDetailsSuccessAction |
    GetCountryDetailsFailAction;