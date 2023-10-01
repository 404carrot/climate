import { ClimateService } from './../services/climate.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

//import { Component } from '@angular/core';
//import { ClimateService } from './services/climate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  
  constructor(private climateAPI: ClimateService) {}

  ngOnInit() {
    this.getClimateData();

  }
  getClimateData(){
    this.climateAPI.getClimateData().subscribe((response) =>{
      
      console.log(response);
    });

  }
}

