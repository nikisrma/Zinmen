import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
URL = environment.base_api_url;
socialLinksApi = 'social-links';
homePageApi = 'home-page';
shareSocialData= new BehaviorSubject({});
private keyword = new BehaviorSubject<any>([]);


constructor(private http:HttpClient) { }


  
sendKeywordMessage(keyword: any){
  this.keyword.next(keyword);
}
socialLinks() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',       
    }),
  };
  return this.http
    .get<any>(`${this.URL}${this.socialLinksApi}`, httpOptions)
    .pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return err.error;
      })
    );
}


homePage(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',       
    }),
  };
  return this.http
    .get<any>(`${this.URL}${this.homePageApi}`, httpOptions)
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
