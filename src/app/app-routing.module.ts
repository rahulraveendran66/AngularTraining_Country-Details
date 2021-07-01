import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'', redirectTo:'/countries', pathMatch: 'full'},
  { path:'countries', component:CountryListComponent },
  { path:'country/:name', component:CountryDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
