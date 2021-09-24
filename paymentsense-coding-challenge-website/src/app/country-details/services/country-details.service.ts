import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountryDetails } from 'src/app/country-details/models/country-details.model';
import { EnvironmentUrlService } from 'src/service/environment-url.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

 
@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {
  countries: CountryDetails[];
  constructor(private http: HttpClient,
    private envUrl: EnvironmentUrlService) { }

 
  
  getCountriesByRegion(region: string) {
    const url = `${this.envUrl.CountryApiUrl}${region.toLowerCase()}`;
    return this.http.get<any>(url);
  }

   

}
