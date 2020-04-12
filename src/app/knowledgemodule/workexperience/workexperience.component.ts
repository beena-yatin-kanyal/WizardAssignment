import { Component, OnInit } from '@angular/core';
// Moved to DuplicateFinderService.
// import * as _ from "lodash";
// Moved to NavigatorService.
// import { Router } from '@angular/router';
import { DuplicateFinderService } from 'src/app/services/duplicatefinder/duplicate-finder.service';
import { NavigatorService } from 'src/app/services/navigate/navigator.service';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.scss']
})
export class WorkexperienceComponent implements OnInit {

  workexplist: any[];
  showErrorMessage: boolean;

  constructor(private navigatorServ: NavigatorService,
    private duplicateFinderServ: DuplicateFinderService) { }

  ngOnInit(): void {
    this.workexplist = [{ workexp: '' }];
    this.showErrorMessage = false;
  }

  add() {
    this.workexplist.push({ workexp: '' });
    this.showErrorMessage = false;
  }

  remove(idx: number) {
    console.log("Removing field for index id= ", idx);
    this.workexplist.splice(idx);
    this.showErrorMessage = false;
  }

  goToPage(uri: string) {
    this.navigatorServ.goToUrl(uri);
  }

  validate() {
    const duplicates = this.duplicateFinderServ.findDuplicatesByKey(this.workexplist, 'workexp');
    if (duplicates.length > 1) {
      console.log("Duplicate values are", duplicates);
      this.showErrorMessage = true;
    } else {
      // this.router.navigateByUrl('/wizardfinished');
      this.goToPage('/wizardfinished');
    }
  }

}
