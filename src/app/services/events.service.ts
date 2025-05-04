import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '../events/events.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseApiUrl: string = "https://localhost:7179";

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.baseApiUrl + '/api/events');
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(this.baseApiUrl + '/api/events/' + id);
  }

  addEvent(addEventRequest: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(this.baseApiUrl + '/api/events', addEventRequest);
  }

  editEvent(id: number, editEventRequest: IEvent): Observable<IEvent> {
    return this.http.put<IEvent>(this.baseApiUrl + '/api/events/' + id, editEventRequest);
  }

  deleteEvent(id: number): Observable<IEvent> {
    return this.http.delete<IEvent>(this.baseApiUrl + '/api/events/' + id);
  }


}
