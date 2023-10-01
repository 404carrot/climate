import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimateService {
  

  constructor(private http: HttpClient) {}

  getClimateData() :Observable<any>{
    const lat = environment.lat;
    const lon = environment.lon;
    const apiKey = environment.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    return this.http.get(url);
  }

}
