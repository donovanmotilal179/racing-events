import { Component } from '@angular/core';
import { IEventDetail } from '../event-details/event-details.model';
import { EventsDetailService } from 'src/app/services/events-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'race-add-event-details',
  templateUrl: './add-event-details.component.html',
  styleUrls: ['./add-event-details.component.css']
})
export class AddEventDetailsComponent {
  
  addEventDetailRequest: IEventDetail = {
      id: 0,
      race_name: '',
      time_of_race: '',
      distance_of_race: '',
      num_of_particpating_horses: 0,
      num_of_particpating_jockeys: 0,
      eventId: 0,   
  };

  constructor(private eventDetailService: EventsDetailService, private router: Router) { }

  addEventDetail() {
    this.addEventDetailRequest.eventId = Number(this.addEventDetailRequest.eventId);
    //console.log(this.addEventDetailRequest);    
    this.eventDetailService.addEventDetails(this.addEventDetailRequest)
    .subscribe({
      next: (_eventDetail) => {
        this.router.navigate(['eventDetails'])
      }
    });
  }
}
