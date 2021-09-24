import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from 'src/app/country-details/models/country.model';

@Component({
  selector: 'shared-country-list',
  templateUrl: './country-list.component.html' 
})
export class CountryListComponent {

  @Input() formCtrl: FormControl;
  @Input() countries: Country[];
  @Input() hideCountryList : boolean = false;
  @Output() countryChanged: EventEmitter<any> = new EventEmitter();


  onCountryChanged(ob) {
    let selectedCountryCode = ob.value;
    this.countryChanged.emit(selectedCountryCode);
  }
}
