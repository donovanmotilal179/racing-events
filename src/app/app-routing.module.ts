import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventDetailsMultipleSearchComponent } from './events/event-details-multiple-search/event-details-multiple-search.component';
import { AddEventsComponent } from './events/add-events/add-events.component';
import { SigninComponent } from './Users/signin/signin.component';
import { RegisterComponent } from './Users/register/register.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';
import { AddEventDetailsComponent } from './events/add-event-details/add-event-details.component';
import { EditEventDetailsComponent } from './events/edit-event-details/edit-event-details.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'events/addevent', component: AddEventsComponent },
  //{ path: 'events/:id/editevent', component: EditEventsComponent },
  { path: 'events/editevent/:id', component: EditEventsComponent },
  { path: 'events/eventDetails/:id', component: EventDetailsComponent },
  { path: 'events/eventDetails/addeventdetail', component: AddEventDetailsComponent },
  { path: 'events/eventDetails/editeventdetail/:id', component: EditEventDetailsComponent },
  { path: 'eventDetails', component: EventDetailsComponent },
  { path: 'eventDetails/addeventdetail', component: AddEventDetailsComponent },
  { path: 'eventDetails/editeventdetail/:id', component: EditEventDetailsComponent },
  { path: 'eventDetailsSearch', component: EventDetailsMultipleSearchComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
