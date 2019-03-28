import { Component, OnInit } from '@angular/core';
import { BrewService } from '../brew.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
	text :string ="";
	api = [];


  constructor( private _brew :BrewService) { }

  ngOnInit() {
  }

  onCall(){
  	this._brew.getBrew().subscribe((data: any[]) => {this.api = data;});
  }

}
