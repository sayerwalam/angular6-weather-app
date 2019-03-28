import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WeatherResultsComponent} from './weather-results/weather-results.component'

const routes: Routes = [
 {path: 'weather', component: WeatherResultsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
