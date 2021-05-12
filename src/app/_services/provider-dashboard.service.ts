import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProviderdashboardService {
  private planid = new BehaviorSubject<any>([]);
  URL = environment.base_api_url;
  subscriptionPlansApi = 'subscription-plans';
  userRenewPlansApi = 'user-renew-plans';
  constructor(private http:HttpClient) { }

  sendPlanId(id:any){
    this.planid.next( id );
  }
  subscriptionPlans() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',    
        'Authorization':`Bearer ${localStorage.getItem('ba_token')}`   
      }),
    };
    return this.http
      .get<any>(`${this.URL}${this.subscriptionPlansApi}`, httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return err.error;
        })
      );
  }
  userRenewPlans() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',    
        'Authorization':`Bearer ${localStorage.getItem('ba_token')}`   
      }),
    };
    return this.http
      .get<any>(`${this.URL}${this.userRenewPlansApi}`, httpOptions)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return err.error;
        })
      );
  }

}
