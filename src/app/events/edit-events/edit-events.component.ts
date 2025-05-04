import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from '../events.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'race-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  editEventRequest: IEvent = {     
      id: 0,
      event_name: '',
      date_of_event: '',
      event_location: '',
      entry_fee: 0,
    };

  constructor(private router: Router, private route: ActivatedRoute, private eventsService: EventsService) {

  }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      const id = +params['id']; // The '+' converts the string to a number
      // Use the ID to fetch data or perform actions
      console.log(id);
      if (id) {
        // call api
        this.eventsService.getEvent(id)
        .subscribe({
          next: (response) => {
            this.editEventRequest = response;
          }
        })
      }
    });          
  }

  editEvent() {
    this.eventsService.editEvent(this.editEventRequest.id, this.editEventRequest)
    .subscribe({
      next: (response) => {
        this.router.navigate(['events']);
      }
    })
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['events']);
      }
    });
  }


}
