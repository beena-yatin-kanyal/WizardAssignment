import { Component, OnInit } from '@angular/core';
// Moved to NavigatorService.
// import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigate/navigator.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {

  constructor(private navigatorServ: NavigatorService) { }

  ngOnInit(): void {
  }

  goToPage(uri: string) {
    this.navigatorServ.goToUrl(uri);
  }
}
