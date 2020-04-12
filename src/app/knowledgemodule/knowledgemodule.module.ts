import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillscomponentComponent } from './skillscomponent/skillscomponent.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
// Importing forms module in the knowledge module as it was not getting imported directly from the app.module.ts file.
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkillscomponentComponent,
    WorkexperienceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SkillscomponentComponent,
    WorkexperienceComponent
  ]
})
export class KnowledgemoduleModule { }
