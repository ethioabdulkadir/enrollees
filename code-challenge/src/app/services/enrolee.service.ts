import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

/**
 * Enrollees related tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class EnroleeService {

  constructor(private http: HttpClient) { }

  /**
   * List all the enrolees
   */
  public listRequest(): Observable<any> {
    let url: string = `${environment.server}${environment.list}`;
    return this.http.get<any>(
      url, this.getHeader()
    );
  }

  /**
   * Header info for http related communications
   */
  private getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
