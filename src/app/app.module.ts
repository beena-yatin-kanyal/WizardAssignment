import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnowledgemoduleModule } from './knowledgemodule/knowledgemodule.module';
import { PersonalmoduleModule } from './personalmodule/personalmodule.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';


@NgModule({
  declarations: [
    AppComponent,
    // PersonaldetailsComponent,
    // ContactdetailsComponent,
    // SkillscomponentComponent,
    // WorkexperienceComponent,
    WelcomeComponent,
    WizardfinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // commented as now are directly using the forms module in the knowledge module.
    // check knowledgemodule.module file.
    // FormsModule,
    // ReactiveFormsModule,
    KnowledgemoduleModule,
    PersonalmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
