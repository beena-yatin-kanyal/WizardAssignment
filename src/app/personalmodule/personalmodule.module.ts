import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { CountriesServiceService } from '../services/country/countries-service.service';

@NgModule({
  declarations: [
    PersonaldetailsComponent,
    ContactdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonaldetailsComponent,
    ContactdetailsComponent
  ],
  providers: [
    CountriesServiceService
  ]
})
export class PersonalmoduleModule { }
