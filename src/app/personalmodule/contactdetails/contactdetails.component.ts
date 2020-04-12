import { Component, OnInit } from '@angular/core';
// Moved to NavigatorService.
// import { Router } from '@angular/router';
import { CountriesServiceService } from 'src/app/services/country/countries-service.service';
import { NavigatorService } from 'src/app/services/navigate/navigator.service';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.scss']
})
export class ContactdetailsComponent implements OnInit {

  constructor(private navigatorServ: NavigatorService,
    private countriesServ: CountriesServiceService) { }

  countries: any;

  ngOnInit(): void {
    this.countries = this.countriesServ.getCountries();
  }

  goToPage(uri: string) {
    this.navigatorServ.goToUrl(uri);
  }
}
