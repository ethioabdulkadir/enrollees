import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Enrollee Service
 */
@Injectable({
  providedIn: 'root'
})
export class EnroleeService {

  constructor(private http: HttpClient) { }

  /**
   * Header info for http related communications
   */
  private header() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  /**
   * fetch enrolles from server
   */
  public list(): Observable<any> {
    let url: string = `${environment.server}${environment.enrollees}`;
    console.log(url);
    return this.http.get<any>(
      url, this.header()
    );
  }

  /**
   * update enrollee information
   * 
   */
  public update(enrollee): Observable<any> {
    console.log(enrollee);
    let url: string = `${environment.server}${environment.enrollees}/${enrollee.id}`;
    let body = {'name': enrollee.name, 'active': enrollee.active};
    return this.http.put<any>(
      url, body, this.header()
    );
  }
}
