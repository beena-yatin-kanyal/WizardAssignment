import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { SkillscomponentComponent } from './skillscomponent/skillscomponent.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonaldetailsComponent,
    ContactdetailsComponent,
    SkillscomponentComponent,
    WorkexperienceComponent,
    WelcomeComponent,
    WizardfinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
