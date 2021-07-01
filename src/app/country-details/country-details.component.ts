import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country ;


  constructor( private countriesService : CountriesService , private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getCountryByName();
  }

  getCountryByName(): void {
    const name : string = this.route.snapshot.paramMap.get('name') || "";
    this.countriesService.getCountryByName(name)
    .subscribe(country => this.country = country[0]);
  }

}

