import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryDetailsActionTypes, GetCountryDetailsFailAction, GetCountryDetailsSuccessAction } from '../actions/country-details.actions';
import { CountryDetailsService } from 'src/app/country-details/services/country-details.service';
import { CountryDetails } from 'src/app/country-details/models/country-details.model';

@Injectable()
export class CountryDetailsEffects {
 

  getCountryDetails$ = createEffect(() => this.actions$
    .pipe(
      ofType<GetCountryDetailsFailAction>(CountryDetailsActionTypes.GET_COUNTRY_DETAILS),
      mergeMap(
        (data) => this.service.getCountriesByRegion(data.payload)
          .pipe(
            map(data   => {
              let controyDetails: CountryDetails[] = [];
              for (let ctydetail of data)
              {
                let countryDetail =  new CountryDetails();
    
                countryDetail.name = ctydetail.name;
                countryDetail.countryCode = ctydetail.alpha3Code;
                countryDetail.capital = ctydetail.capital;
                countryDetail.population = ctydetail.population;
                countryDetail.flag = ctydetail.flags[0];
                countryDetail.currencyName = ctydetail.currencies[0].name;
                controyDetails.push(countryDetail);
        
              };
              return new GetCountryDetailsSuccessAction (controyDetails)
            }),
            catchError(error => of(new  GetCountryDetailsFailAction(error)))
          )
      ),
    )
  )

 
  constructor(
    private actions$: Actions,
    private service: CountryDetailsService
  ) { }
}


  