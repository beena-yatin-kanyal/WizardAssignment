import { Component, OnInit } from '@angular/core';
// Moved to DuplicateFinderService.
// import * as _ from "lodash";
// Moved to NavigatorService.
// import { Router } from '@angular/router';
import { DuplicateFinderService } from 'src/app/services/duplicatefinder/duplicate-finder.service';
import { NavigatorService } from 'src/app/services/navigate/navigator.service';

@Component({
  selector: 'app-skillscomponent',
  templateUrl: './skillscomponent.component.html',
  styleUrls: ['./skillscomponent.component.scss']
})
export class SkillscomponentComponent implements OnInit {

  skillsList: any[];
  totalskills: number;
  showErrorMessage: boolean;

  constructor(private navigatorServ: NavigatorService,
    private duplicateFinderServ: DuplicateFinderService) { }

  ngOnInit(): void {
    this.skillsList = [{ skill: '' }];
    this.totalskills = 1;
    this.showErrorMessage = false;
  }

  addSkills() {
    this.skillsList.push({ skill: '' });
    this.totalskills++;
    this.showErrorMessage = false;
  }

  removeSkills(idx: number) {
    console.log("Removing field for index id= ", idx);
    this.skillsList.splice(idx);
    this.totalskills--;
    this.showErrorMessage = false;
  }

  goToPage(uri: string) {
    this.navigatorServ.goToUrl(uri);
  }

  validate() {
    const duplicates =
      this.duplicateFinderServ.findDuplicatesByKey(this.skillsList, 'skill');
    if (duplicates.length > 1) {
      console.log("Duplicate values are", duplicates);
      this.showErrorMessage = true;
    } else {
      // this.router.navigateByUrl('/workexperience');
      this.goToPage('/workexperience');
    }
  }
}
