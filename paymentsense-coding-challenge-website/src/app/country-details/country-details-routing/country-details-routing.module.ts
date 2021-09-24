import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from '../components/country-details.component';
 
const routes: Routes = [
     
    {
      path: 'details',
      component: CountryDetailsComponent,
      data: { title: 'Country Details' }
    },
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class CountryDetailsRoutingModule { }
