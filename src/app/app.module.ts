import { NgModule, DEFAULT_CURRENCY_CODE  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventDetailsMultipleSearchComponent } from './events/event-details-multiple-search/event-details-multiple-search.component';
import { AddEventsComponent } from './events/add-events/add-events.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './Users/signin/signin.component';
import { RegisterComponent } from './Users/register/register.component';
import { HeaderComponent } from './banner/header/header.component';
import { AddEventDetailsComponent } from './events/add-event-details/add-event-details.component';
import { EditEventDetailsComponent } from './events/edit-event-details/edit-event-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent,
    EventDetailsMultipleSearchComponent,
    AddEventsComponent,
    EditEventsComponent,
    NavComponent,
    SigninComponent,
    RegisterComponent,
    HeaderComponent,
    AddEventDetailsComponent,
    EditEventDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'ZAR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
