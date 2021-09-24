import { CountryDetails } from 'src/app/country-details/models/country-details.model';
import { CountryDetailsAction, CountryDetailsActionTypes } from '../actions/country-details.actions';

export interface CountryDetailsState {
    countryDetails: CountryDetails[],
    loading: boolean,
    error: string | any
}

const initialState: CountryDetailsState = {
    countryDetails:
        [
            {
                capital : 'London',
                countryCode : 'UK',
                currencyName : 'GBP',
                flag : '',
                name: 'United Kingdom',
                population : 100
            } 
        ],
    loading: false,
    error: ""
}

export function CountryDetailsReducer(state: CountryDetailsState = initialState, action: CountryDetailsAction ) {
    switch (action.type) {
 
        case CountryDetailsActionTypes.GET_COUNTRY_DETAILS:
            return {
                ...state,
                loading: true
            }
        case CountryDetailsActionTypes.GET_COUNTRY_DETAILS_SUCCESS:
            return {
                ...state,
                countryDetails: action.payload,
                loading: false
            }
        case CountryDetailsActionTypes.GET_COUNTRY_DETAILS_FAIL:
            return {
                ...state, 
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}