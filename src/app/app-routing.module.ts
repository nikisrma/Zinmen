import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrowseServiceComponent } from './components/browse-service/browse-service.component';
import { InvestComponent } from './components/invest/invest.component';
import { BecomeBeauticianComponent } from './components/become-beautician/become-beautician.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'faq',component:FaqComponent},
  {path:'signin',component:SigninComponent},
  {path:'browse-service',component:BrowseServiceComponent},
  {path:'invest',component:InvestComponent},
  {path:'become-beautician',component:BecomeBeauticianComponent},
  {path:'contact',component:ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
