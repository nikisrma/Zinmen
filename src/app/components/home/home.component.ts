import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { LoginService } from 'src/app/_services/login.service';
import { OwlCarousel } from 'ngx-owl-carousel';
import {JobService} from 'src/app/_services/job.service'
import { ProviderdashboardService } from 'src/app/_services/provider-dashboard.service';
 import { ToastrModule, ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  categoriesData: any = [];
  showCompanyField : boolean = false;
  // @ViewChild('delivery') private deliveryhref: ElementRef;
  planId : number = 0;
  planData = [];
  hoverPlan: number = 0;
  selectedPlanId : number = 0;
  category : any ;
  countData : any = {};
  expertsData: any = [];
  testimonialsData: any = [];
  subCategoriesData: any = [];
  sliders: any = [];
  providerListData : any = [];
  indexCategory: number = 0;

  // heading blocks
  welcomeBlock: any;
  bookServiceProviderBlock: any;
  hireExpertBlock: any;
  packagesBlock: any;
  appointmentBlock: any;

  // customer createjob booking
  createJob={
    category: '',
    category_name:'',
    sub_category: '',
    sub_category_name:''
  }

  @ViewChild('owlElement') owlElement: OwlCarousel | undefined;
  sliderInnerData: any;

  userData: any;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 700,
    margin: 10,
    navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true,
  }

  navOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  constructor(
    private router: Router,
    private wowService: NgwWowService,
    private homeService: HomeService,
    private loginService: LoginService,
    private jobService: JobService,
    private providerService: ProviderdashboardService,
     private toastr : ToastrService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.wowService.init();
      }
    });
  }

  ngOnInit(): void {
    this.getHomePage();
    this.getUserDetail();
    this.getPlans();
    this.loginService.loginStatus.subscribe(res=>{
      if(res){
        this.getPlans();
      }
    })
  }

  //owl on change event

  getUserDetail() {
    this.loginService.loginStatus.subscribe((res) => {
      if (res) {
        // this.userData = JSON.parse(localStorage.getItem('user_beautyApp'));
        console.log(res);
      }
    });
  }

  logout() {
    this.loginService.logout();
  }

  onChagneCarousel(event:any) {
    this.sliderInnerData = this.sliders[event.item.index];
  }

  homeSlide = {
    items: 1,
    dots: true,
    nav: true,
    autoplay: false,
    loop: false,
    rewind: true,
    // autoplayTimeout: 1520,
    smartSpeed: 500,
    // animateIn: 'linear',
    // animateOut: 'linear'
    navText: [
      "<i class='fas fa-chevron-circle-left'></i>",
      "<i class='fas fa-chevron-circle-right'></i>",
    ],
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    onChange: (event:any) => {
      this.onChagneCarousel(event);
    },
  };

  testimonialsOption = {
    items: 2,
    dots: true,
    nav: false,
    autoplay: false,
    loop: false,
    rewind: true,
    smartSpeed: 500,
    autoHeight: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  getHomePage() {
    this.homeService.homePage().subscribe((res:any) => {
      if (res.status == 'success') {
        // console.log('homepage data', res);

        this.categoriesData = res.categories;
        this.expertsData = res.experts;
        this.testimonialsData = res.testimonials;
        this.providerListData = res.BusinessProviders;
        this.countData = res.Count;

        this.subCategoriesData = this.categoriesData[0].sub_categories
          ? res.categories[0].sub_categories
          : [];
        this.category = this.categoriesData[0];        

          this.createJob.category = this.categoriesData[0].id;
          this.createJob.category_name = this.categoriesData[0].category_name;


        this.sliders = res.sliders;
        if (this.sliders.length > 0) {
          this.sliderInnerData = this.sliders[0];
        }

        //get blocks
        this.welcomeBlock = res.welcomePage;
        this.bookServiceProviderBlock = res.bookServiceProvider;
        this.hireExpertBlock = res.bookServiceProvider;
        this.packagesBlock = res.bookServiceProvider;
        this.appointmentBlock = res.Appointment;
      }
    });
  }

  getSubCategory(data:any, index:any) {
    this.category = data;
    this.subCategoriesData = data.sub_categories ? data.sub_categories : [];
    this.indexCategory = index;
    this.createJob.category = data.id;
    this.createJob.category_name = data.category_name;
  }

  // nevigation to create job booking page after selecting category and sub-catrogry
  createJobBooking(subCategory:any) {
    if(!this.userData){
      this.router.navigate(['/signin']);
      return;
    }
    this.createJob.sub_category = subCategory.id;
    this.createJob.sub_category_name = subCategory.category_name;
    this.jobService.createJobParameter.next(this.createJob);
    this.router.navigate(['/createjob-booking']);
  }

  jobSubCategory(data:any) {  
    this.jobService.createJobParameter.next(data);
    this.router.navigate(['/job-sub-categories']);
  }

  search(value:any){
    if(!value){
      return;
    }else{
      value.trim(); 
      this.homeService.sendKeywordMessage(value);
      this.router.navigate(['/browse-services']);
    }
  }

  viewMore(){
    this.jobService.createJobParameter.next(this.category);
    this.router.navigate(['/job-sub-categories']);
  }

  getPlans() {
    if(!this.userData){
      this.providerService.subscriptionPlans().subscribe((res:any) => {
        if (res.status == 'success') {
          this.planData = res.data;        
        }
      });
    }

    if(this.userData && (this.userData.user_role_id == 3)){
      this.providerService.subscriptionPlans().subscribe((res:any) => {
        if (res.status == 'success') {
             this.planData = res.data;
            for(var i=0;i<this.planData.length;i++){
              console.log()
                // if(this.planData[i].is_selected == 1){
                //     this.selectedPlanId = this.planData[i].id;
                //     break;
                // }
            }
         }
      });
    }
  }

  addClassPlan(index:any) {
    this.hoverPlan = index;
  }

  selectPlat(plan:any){
    this.planId = plan.id;
    this.providerService.sendPlanId(this.planId);
    if(this.planId == 4){
      this.showCompanyField = false;
    }else{
      this.showCompanyField = true;
    }
    // localStorage.setItem('selectedPlan',JSON.stringify(plan));
    // this.deliveryhref.nativeElement.click();

    this.router.navigate(['/become-beautician']);
  }

//   logged in with provider 

  renewPlan(plan:any){
    console.log('aa')
    //let userId = JSON.parse(localStorage.getItem('user_beautyApp')).id;

    let data ={
        // user_id: userId,
        plan_id: plan.id,
        // transaction_id: 'txn123',
        // amount : plan.monthly_membership
    }

    this.providerService.userRenewPlans().subscribe((res:any)=>{
        if (res.status == 'success') {
            this.toastr.success(res.msg, 'Success!');
            this.getPlans();
        } else {
            this.toastr.error(res.msg, 'Error!');
        }
    })
}

bidForJobs(){
  this.router.navigateByUrl('/provider/available-bookings');
}

  
  }

