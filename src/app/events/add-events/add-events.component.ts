import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { IEvent } from '../events.model';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'race-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {


  addEventRequest: IEvent = {     
    id: 0,
    event_name: '',
    date_of_event: '',
    event_location: '',
    entry_fee: 0,
  };

  constructor(private eventsService: EventsService, private router: Router) { }
    
  ngOnInit(): void {

  }  

  addEvent() {
    //console.log(addEventRequest);
    this.eventsService.addEvent(this.addEventRequest)
    .subscribe({
      next: (_event) => {
        this.router.navigate(['events'])
      }
    });
  }

}
