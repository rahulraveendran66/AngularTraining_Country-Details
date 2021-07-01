import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Country } from './country';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countryUrl = "https://restcountries.eu/rest/v2/";
  constructor( private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl+"all")
    .pipe (
      tap(_ => console.log("Fetched all Countries"))
    );
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl+"name/"+name+"?fullText=true")
    .pipe (
      tap(_ => console.log("Fetched details of "+name))
    );
  }
}

