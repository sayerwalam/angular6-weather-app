import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { WeatherService } from './weather.service';
import { BrewService } from './brew.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherResultsComponent,
    HomeComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService,BrewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
