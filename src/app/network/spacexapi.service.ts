import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  getAllMissions() {
  return this.http.get('https://api.spacexdata.com/v3/launches');
  }

  getMissionsByYear(year: number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getMissionByFlightNumber(flightNumber: any) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
}
