import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { ProviderdashboardService } from 'src/app/_services/provider-dashboard.service';
import * as globalConstant from '../../_share/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  lastScroll = globalConstant.scrollVal;
  menuShow: boolean = false;
  currentUrl : any ;

  userData: any;

  constructor(private router: Router, private loginService: LoginService, private providerService : ProviderdashboardService) { 
    this.currentUrl =  this.router.url.split('/')[1];
   
  }

  ngOnInit(): void {
    this.getUserDetail();
    if(this.currentUrl != 'become-beautician'){
      this.providerService.sendPlanId([]);
    }
  }

  menuToggle() {
    this.menuShow = !this.menuShow;
  }

  getUserDetail() {
    this.loginService.loginStatus.subscribe((res) => {
      if (res) {
        // this.userData = JSON.parse(localStorage.getItem('user_beautyApp'));
        console.log(res);
      }
    });
  }

  logout(){
    this.loginService.logout();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll >= 400) {
      //console.log('300px ++ ');

      if (currentScroll == 0) {
        document.body.classList.remove('scroll-up');
        return;
      }
      if (
        currentScroll > this.lastScroll &&
        !document.body.classList.contains('scroll-down')
      ) {
        // down
        document.body.classList.remove('scroll-up');
        document.body.classList.add('scroll-down');
      } else if (
        currentScroll < this.lastScroll &&
        document.body.classList.contains('scroll-down')
      ) {
        // up
        document.body.classList.remove('scroll-down');
        document.body.classList.add('scroll-up');
      }
      this.lastScroll = currentScroll;
    } else {
      //console.log('-- 300px');

      if (currentScroll == 0) {
        document.body.classList.remove('scroll-up');
        document.body.classList.remove('scroll-down');
        return;
      } else {
        document.body.classList.add('scroll-down');
        document.body.classList.remove('scroll-up');
      }
    }
  }
  
}
