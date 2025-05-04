import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEventDetail } from '../events/event-details/event-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsDetailService {

  baseApiUrl: string = "https://localhost:7179";
  
    constructor(private http: HttpClient) { }
  
    getAllEventDetails(): Observable<IEventDetail[]> {
      return this.http.get<IEventDetail[]>(this.baseApiUrl + '/api/eventdetails');
    }
  
    getEventDetails(id: number): Observable<IEventDetail> {
      return this.http.get<IEventDetail>(this.baseApiUrl + '/api/eventdetails/' + id);
    }

    getEventDetailsByEventId(id: number): Observable<IEventDetail[]> {
      return this.http.get<IEventDetail[]>(this.baseApiUrl + '/api/eventdetailsevent/' + id);
    }
  
    addEventDetails(addEventDetailRequest: IEventDetail): Observable<IEventDetail> {
      return this.http.post<IEventDetail>(this.baseApiUrl + '/api/eventdetails', addEventDetailRequest);
    }
  
    editEventDetails(id: number, editEventRequest: IEventDetail): Observable<IEventDetail> {
      return this.http.put<IEventDetail>(this.baseApiUrl + '/api/eventdetails/' + id, editEventRequest);
    }
  
    deleteEventDetails(id: number): Observable<IEventDetail> {
      return this.http.delete<IEventDetail>(this.baseApiUrl + '/api/eventdetails/' + id);
    }
}
