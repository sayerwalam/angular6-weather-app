import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewService {

  constructor(private _https:HttpClient) { }

  getBrew(): Observable <any>{
  	return this._https.get("https://api.openbrewerydb.org/breweries?by_state=california");
  }
}
