  
import { CountryDetailsState } from 'src/app/country-details/store/reducers/country-details.reducer';
import { RegionState } from 'src/app/country-details/store/reducers/region.reducer';

export default interface AppState {
    region: RegionState;
    countryDetails: CountryDetailsState
}