import { Region } from 'src/app/country-details/models/region.model';
import { RegionAction, RegionActionTypes } from '../actions/region.actions';

export interface RegionState {
    regions: Region[],
    loading: boolean,
    error: string | any
}

const initialState: RegionState = {
    regions:
        [
            {
                id: 1,
                name: "Europe"
            },
            {
                id: 2,
                name: "Asia"
            },
            {
                id: 3,
                name: "Africa",
            },
            {
                id: 4,
                name: "Americas",
            },
            {
                id: 5,
                name: "Oceania",
            }
        ],
    loading: false,
    error: ""
}
export function RegionReducer(state: RegionState = initialState, action: RegionAction) {
    switch (action.type) {

        case RegionActionTypes.GET_REGIONS:
            return {
                ...state,
                loading: true
            }
        case RegionActionTypes.GET_REGIONS_SUCCESS:
            return {
                ...state,
                regions: action.payload,
                loading: false
            }
        case RegionActionTypes.GET_REGIONS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
