import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountryDetails } from 'src/app/country-details/models/country-details.model';

@Component({
  selector: 'shared-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent {
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencyName', 'flag'];
  dataSource = new MatTableDataSource<CountryDetails>();

  @Input() public data: CountryDetails[];
  @Input() public hideTable: boolean = true ;

   
}
