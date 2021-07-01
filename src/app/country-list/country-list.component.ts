import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Country } from '../country';




@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit,AfterViewInit {

  countries: Country[]=[];
  displayArray = [ 'name', 'capital', 'region', 'population'];
  dataSource = new MatTableDataSource<Country>(this.countries);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor( private countriesService : CountriesService , private router : Router) {

  }

  getCountries(): void {
    this.countriesService.getCountries()
    .subscribe(countries => this.dataSource.data = countries as Country[]);
  }

  navigateToCountry(row: Country) : void{
    this.router.navigateByUrl('country/'+row.name);
  }


  ngOnInit() {
      this.getCountries();
  }

  applyFilter(filterValue: any ) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();
  }  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.length = this.countries.length;
}
}
