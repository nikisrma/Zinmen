import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { JobService } from 'src/app/_services/job.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialLinksData:any;
  categoies:any =[];
  constructor(
    private homeService:HomeService,
    private jobService:JobService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getSocialLinks();
  }

  getSocialLinks(){
    this.homeService.socialLinks().subscribe((res)=>{
      if(res.status == 'success'){
        this.socialLinksData = res;
        this.categoies= res.categories;
        this.homeService.shareSocialData.next(res);
      }
    })
  }

  jobSubCategory(data:any) {  
    this.jobService.createJobParameter.next(data);
    this.router.navigate(['/job-sub-categories']);
  }

}
