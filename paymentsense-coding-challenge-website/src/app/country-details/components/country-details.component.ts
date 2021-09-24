import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetCountryDetailsAction } from 'src/app/country-details/store/actions/country-details.actions';
import AppState from 'src/models/app-state.model';
import { CountryDetails } from 'src/app/country-details/models/country-details.model';
import { Region } from 'src/app/country-details/models/region.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  selectedRegion: string;
  isEnabledSubmitButton: boolean = false;
  countryDetailForm: FormGroup;
  regions$: Observable<Region[]>;
  countryDetails$: Observable<CountryDetails[]>;
  countryDetails: CountryDetails[];
  hideCountryList: boolean = false;
  hideTable: boolean = true;

  regions: Region[];
  error$: Observable<any>;

  public displayedColumns = ['name', 'capital', 'population', 'currencyName', 'flag', 'details'];
  public dataSource = new MatTableDataSource<CountryDetails>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.listRegionFormGroup();
    this.getRegionsFromStore();
    this.isEnabledSubmitButton = false;
  }

  public listCounties() {
    this.getCountryDetailsFromStore();

  }

  private listRegionFormGroup() {
    this.countryDetailForm = new FormGroup({
      country: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required])
    });
  }
  public redirectToDetails = (id: string) => {
    const url = `/country/details/${id}`;
    this.router.navigate([url]);
  }


  regionModified(regionName: string) {
    this.selectedRegion = regionName;
    this.isEnabledSubmitButton = regionName != undefined && regionName.length > 0;
    this.hideCountryList = this.selectedRegion !== undefined;
  }

  public getRegionsFromStore = () => {
    this.regions$ = this.store.select(store => store.region.regions);
    this.regions$.subscribe(res => {
      this.regions = res as Region[];
    }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public customSort = (event) => {
    //console.log(event);
  }

  public getCountryDetailsFromStore = () => {
    // this.countries = [];
    this.store.dispatch(new GetCountryDetailsAction(this.selectedRegion));
    this.countryDetails$ = this.store.select(store => store.countryDetails.countryDetails);
    this.countryDetails$.subscribe(res => {
      this.countryDetails = res as CountryDetails[];

      this.hideTable = false;
      this.dataSource.data = this.countryDetails;
    });
  }
}
