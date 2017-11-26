import Event from '../models/event.model';
import { Observable } from 'rxjs/Rx';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Response, Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  api_url = 'http://172.16.3.196:3000';
  eventUrl = `${this.api_url}/events`;
  options;
  authToken;
  constructor(private http: HttpClient) {}

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  createEvent(event: Event): Observable<any> {
    this.loadToken(); // Ge
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authToken);
    console.log(this.authToken);
    return this.http.post(`${this.eventUrl}`, event, { headers: headers });
  }

  getEvents(): Observable<Event[]> {
    this.loadToken(); // Ge
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authToken);
    return this.http
      .get(this.eventUrl, { withCredentials: true, headers: headers })
      .map(res => {
        return res['datas'].data as Event[];
      });
  }

  getEvent(name: string): Observable<Event[]> {
    this.loadToken(); // Ge
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authToken);

    const getUrl = `${this.eventUrl}/${name}`;
    return this.http
      .get(getUrl, { withCredentials: true, headers: headers })
      .map(res => {
        console.log(res);
        return res['data'] as Event[];
      });
  }

  deleteEvent(id: string): any {
    this.loadToken(); // Ge
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authToken);

    const deleteUrl = `${this.eventUrl}/${id}`;
    return this.http
      .delete(deleteUrl, {
        withCredentials: true
      })
      .map(res => {
        return res;
      });
  }
}
