import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus = new BehaviorSubject<any>([]);
  
  constructor(public router:Router, private loadingService:LoaderService) { }

  logout(){
    this.loadingService.isLoading.next(true);
    //this.toaster.success
    console.log('user Logged out successfully','success!');
    this.loginStatus.next(true);
    setTimeout(()=>{
      this.loadingService.isLoading.next(false);
      this.router.navigate(['/header']);
    },1500);
    
  }
}
