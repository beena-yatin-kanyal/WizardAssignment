import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesServiceService } from 'src/app/services/country/countries-service.service';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.scss']
})
export class ContactdetailsComponent implements OnInit {

  constructor(private router: Router,
    private countriesServ: CountriesServiceService) { }

  countries: any;

  ngOnInit(): void {
    this.countries = this.countriesServ.getCountries();
  }

  goToPage(uri: string) {
    this.router.navigateByUrl(uri);
  }
}
