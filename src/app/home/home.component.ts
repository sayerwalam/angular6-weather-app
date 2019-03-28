import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   selectedValue :string= "Celcius";
   cityName: string;
   temperature: string;
   weather: string;
   isSearched = false;

  constructor(private _weatherservice: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(Name){
    if (this.selectedValue === "Fahrenheit"){
      this._weatherservice.getWeatherFahrenheit(Name).subscribe( data => {this.cityName = data.name;
      this.temperature = data.main.temp + '°F';
      this.weather = data.weather[0].main});
      this.isSearched = true;
    }
    else{
      this._weatherservice.getWeatherCelcius(Name).subscribe( data => {this.cityName = data.name;
      this.temperature = data.main.temp + '°C';
      this.weather = data.weather[0].main});
      this.isSearched = true;
    }
  	
  }

}
