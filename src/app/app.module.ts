import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CountUpModule } from 'ngx-countup';
import { OwlModule } from 'ngx-owl-carousel';
import { ToastrModule } from 'ngx-toastr';
import { NgwWowModule } from 'ngx-wow';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { TruncatePipe } from './_share/_pipes/truncate.pipe';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrowseServiceComponent } from './components/browse-service/browse-service.component';
import { InvestComponent } from './components/invest/invest.component';
import { BecomeBeauticianComponent } from './components/become-beautician/become-beautician.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TruncatePipe,
    AboutComponent,
    FaqComponent,
    SigninComponent,
    BrowseServiceComponent,
    InvestComponent,
    BecomeBeauticianComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    OwlModule,
    NgwWowModule,
    CarouselModule,
    CountUpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
