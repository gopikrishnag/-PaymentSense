import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsService } from './services/country-details.service';
import { CountryDetailComponent } from './components/shared/country-detail/country-detail.component';
import { RegionComponent } from './components/shared/region/region.component';
import { CountryDetailsComponent } from './components/country-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CountryDetailsRoutingModule } from './country-details-routing/country-details-routing.module';
import { CountryListComponent } from './components/shared/country-list/country-list.component';


@NgModule({
  declarations: [
    RegionComponent,
    CountryDetailsComponent,
    CountryDetailComponent,
    CountryListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CountryDetailsRoutingModule,
  ],
  providers: [
    CountryDetailsService
  ],

})
export class CountryDetailsModule { }