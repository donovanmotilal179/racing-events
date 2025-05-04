import { Component, OnInit } from '@angular/core';
import { IEvent } from './events.model';
import { EventsService } from '../services/events.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'race-events',
  templateUrl: './events.component.html',
  styleUrls: ['../../styles.css', './events.component.css']
})
export class EventsComponent {

  Events: IEvent[] = [];

  constructor(private eventsService: EventsService) {}
  

  ngOnInit(): void {    
    this.eventsService.getAllEvents()
    .subscribe({
      next: (events) => {
        this.Events = events;
      },
      error: (response) => {
        console.log(response);
      }      
    })    
  }

}
