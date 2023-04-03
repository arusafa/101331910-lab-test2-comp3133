import { Component } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: SpacexapiService
    ) { }

    mission: any;
    flightNumber = this.route.snapshot.params['id'];

    ngOnInit() {
      this.api.getMissionByFlightNumber(this.flightNumber).subscribe((data: {}) => {
        console.log(data);
        this.mission = data;
      });
    }
}
