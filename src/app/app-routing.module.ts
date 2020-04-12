import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PersonaldetailsComponent } from './personalmodule/personaldetails/personaldetails.component';
import { ContactdetailsComponent } from './personalmodule/contactdetails/contactdetails.component';
import { SkillscomponentComponent } from './knowledgemodule/skillscomponent/skillscomponent.component';
import { WorkexperienceComponent } from './knowledgemodule/workexperience/workexperience.component';
import { WizardfinishedComponent } from './wizardfinished/wizardfinished.component';


const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "personaldetails", component: PersonaldetailsComponent },
  { path: "contactdetails", component: ContactdetailsComponent },
  { path: "skills", component: SkillscomponentComponent },
  { path: "workexperience", component: WorkexperienceComponent },
  { path: "wizardfinished", component: WizardfinishedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
