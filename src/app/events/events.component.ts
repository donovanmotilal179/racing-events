import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from './events.model';
import { EventsService } from '../services/events.service';
import { interval, Subscription, switchMap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'race-events',
  templateUrl: './events.component.html',
  styleUrls: ['../../styles.css', './events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
  
  Events: IEvent[] = [];
  private dataSubscription: Subscription = new Subscription;
  private routerLink: string | any[] | null | undefined;
  

  constructor(private eventsService: EventsService, private route: ActivatedRoute, private router: Router) {}
  

  ngOnInit(): void { 
    this.dataSubscription = interval(5000) //poll every 5 sec
    .pipe(
      switchMap(() => this.eventsService.getAllEvents())  //fetch data on each interval
    )  
    .subscribe((newData) => {
      this.Events = newData;  //update data when fetched
    });           
  }

 /* goToEdit(id: number): void {
    id: 2;
    //console.log(id);
    this.router.navigate(['editevent', id]);
  }*/

  ngOnDestroy() {
    this.dataSubscription.unsubscribe(); // Prevent memory leaks
  }

  
}
