import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialModule } from './material/material.module';
import { CountryDetailsComponent } from './country-details/country-details.component';




@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
