import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';



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
  ]
})
export class PersonalmoduleModule { }
