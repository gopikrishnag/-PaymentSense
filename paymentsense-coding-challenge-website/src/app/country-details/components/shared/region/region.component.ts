import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetRegionsAction } from 'src/app/country-details/store/actions/region.actions';
import AppState from 'src/models/app-state.model';
import { Region } from 'src/app/country-details/models/region.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regions$: Observable<Region[]>;
  regions: Region[];

  @Input() formCtrl: FormControl;

  
  @Output() regionChanged: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.store.dispatch(new GetRegionsAction() );
    this.regions$ = this.store.select(store => store.region.regions );
    this.regions$.subscribe(res => {
      this.regions = res as Region[];
    },
      () => {
      });
  }

 
  onRegionChanged(ob){
    let selectedBook = ob.value;
    this.regionChanged.emit(selectedBook);
  }
}
