import { Component } from '@angular/core';
import { IEventDetail } from './event-details.model';
import { interval, Subscription, switchMap, timestamp } from 'rxjs';
import { EventsDetailService } from 'src/app/services/events-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'race-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['../../../styles.css','./event-details.component.css']
})
export class EventDetailsComponent {

  EventDetails: IEventDetail[] = [];  
  raceNameFilter: IEventDetail[] = [];
  private dataSubscription: Subscription = new Subscription;
  private routerLink: string | any[] | null | undefined;
  

  constructor(private eventDetailsService: EventsDetailService, private route: ActivatedRoute, private router: Router) {         

  }  
  
  toTimestamp(strDate: string){
    var datum = Date.parse(strDate);
    return datum/1000;
  }

  getFilteredList(raceNameStr: string) {
    return raceNameStr === ''
      ? this.raceNameFilter = this.EventDetails
      : this.raceNameFilter = this.EventDetails.filter(
        eventdetail => eventdetail?.race_name.toLocaleLowerCase().includes(raceNameStr.toLocaleLowerCase())
      );
  }

     /* getFilteredList(raceNameStr: string, distanceStr: string) {
        if (raceNameStr === '' && distanceStr === '') {
          return this.EventDetails; // No filters, return all event details
        }
      
        // Apply race name filter if provided
        let filteredList = this.EventDetails;
        
        if (raceNameStr !== '') {
          filteredList = filteredList.filter(
            eventdetail => eventdetail?.race_name.toLocaleLowerCase().includes(raceNameStr.toLocaleLowerCase())
          );
        }
      
        // Apply distance filter if provided
        if (distanceStr !== '') {
          filteredList = filteredList.filter(
            eventdetail => eventdetail?.distance_of_race.toLocaleLowerCase().includes(distanceStr.toLocaleLowerCase())
          );
        }
      
        return filteredList;
      }*/

  ngOnInit(): void {         
    this.route.params.subscribe(params => {
      const id = +params['id']; // The '+' converts the string to a number
      // Use the ID to fetch data or perform actions      
      if (id) {
        // call api
        //console.log(id);
        this.dataSubscription = interval(5000) //poll every 5 sec
        .pipe(
          switchMap(() => this.eventDetailsService.getEventDetailsByEventId(id))  //fetch data on each interval
        )  
        .subscribe((newData) => {
          this.EventDetails = newData;  //update data when fetched
          this.raceNameFilter = this.EventDetails;
        });
      } else {
        this.dataSubscription = interval(5000) //poll every 5 sec
        .pipe(
          switchMap(() => this.eventDetailsService.getAllEventDetails())  //fetch data on each interval
        )  
        .subscribe((newData) => {
          this.EventDetails = newData;  //update data when fetched
          this.raceNameFilter = this.EventDetails;
        });

      }
    });     
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe(); // Prevent memory leaks
  }
}