import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private _http:Http) {
   }

  getWeatherCelcius(cityName :string):Observable <any>{
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=d636f39ab616ea3a5789e91c58fe30d3&units=metric').pipe(map(response => response.json()));
  }

  getWeatherFahrenheit(cityName :string):Observable <any>{
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=d636f39ab616ea3a5789e91c58fe30d3').pipe(map(response => response.json()));
  }

}
