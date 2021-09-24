import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegionReducer } from './country-details/store/reducers/region.reducer';
import { CountryDetailsReducer } from './country-details/store/reducers/country-details.reducer';
import { CountryDetailsEffects } from './country-details/store/effects/country-details.effects';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    
    StoreModule.forRoot({
      region: RegionReducer,
      countryDetails: CountryDetailsReducer
    }, {}),
    EffectsModule.forRoot([
      CountryDetailsEffects
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
