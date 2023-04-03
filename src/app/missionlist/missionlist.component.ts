import { Component } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent {
  missions: any;
  filteredMissions: any;
  years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020,
  ];
  constructor(private api: SpacexapiService, private router: Router) {}

  filterByYear(year: number): void {
    if (year === 0) {
      this.filteredMissions = this.missions;
    } else {
      this.filteredMissions = this.missions.filter((mission: { launch_year: string; }) => mission.launch_year === year.toString());
    }
  }
  

  ngOnInit(): void {
    this.api.getAllMissions().subscribe((data) => {
      this.missions = data;
      this.filteredMissions = data; // initialize filteredMissions to show all missions
    });
  }

  handleMissionClick(mission: any) {
    this.router.navigate(['/missiondetails', mission.flight_number]);
  }
}
