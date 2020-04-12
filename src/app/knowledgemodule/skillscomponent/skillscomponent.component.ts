import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillscomponent',
  templateUrl: './skillscomponent.component.html',
  styleUrls: ['./skillscomponent.component.scss']
})
export class SkillscomponentComponent implements OnInit {

  skillsList: any[];
  totalskills: number;
  showErrorMessage: boolean;

  constructor(private router: Router) { }

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
    this.router.navigateByUrl(uri);
  }

  validate() {
    const duplicates = _.flow([
      arr => _.groupBy(arr, 'skill'),
      g => _.filter(g, o => o.length > 1),
      _.flatten
    ])(this.skillsList);
    if (duplicates.length > 1) {
      console.log("Duplicate values are", duplicates);
      this.showErrorMessage = true;
    } else {
      // this.router.navigateByUrl('/workexperience');
      this.goToPage('/workexperience');
    }
  }
}
