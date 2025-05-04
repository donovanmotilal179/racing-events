import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsDetailService } from 'src/app/services/events-detail.service';
import { IEventDetail } from '../event-details/event-details.model';

@Component({
  selector: 'race-edit-event-details',
  templateUrl: './edit-event-details.component.html',
  styleUrls: ['./edit-event-details.component.css']
})
export class EditEventDetailsComponent {

  editEventDetailRequest: IEventDetail = {
    id: 0,
    race_name: '',
    time_of_race: '',
    distance_of_race: '',
    num_of_particpating_horses: 0,
    num_of_particpating_jockeys: 0,
    eventId: 0,   
};

  constructor(private router: Router, private route: ActivatedRoute, private eventDetailService: EventsDetailService) {
    
  }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = +params['id']; // The '+' converts the string to a number
      // Use the ID to fetch data or perform actions
      console.log(id);
      if (id) {
        // call api
        this.eventDetailService.getEventDetails(id)
        .subscribe({
          next: (response) => {
            this.editEventDetailRequest = response;
          }
        })
      }
    });          
  }


  editEventDetail() {
    this.eventDetailService.editEventDetails(this.editEventDetailRequest.id, this.editEventDetailRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['eventDetails']);
      }
    })
  }

  deleteEventDetail(id: number) {
    this.eventDetailService.deleteEventDetails(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['eventDetails']);
      }
    });
  }


}
