import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PackageComponent } from './components/package/package.component';
import { ServiceService } from './services/service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnorkelingComponent } from './components/snorkeling/snorkeling.component';
import { TourCarouselComponent } from './components/tour-carousel/tour-carousel.component';
import { TravelPackageComponent } from './components/travel-package/travel-package.component';
import { CarouselModule } from 'primeng/carousel';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SharedModule } from '../Shared/shared.module';
import { RatingModule } from 'primeng/rating';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent, PackageComponent, SnorkelingComponent,
    AllDetailsComponent, FeedbackComponent, TourCarouselComponent, TravelPackageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    BreadcrumbModule,
    FormsModule,
    RatingModule,
    SharedModule  
  ],
  exports: [
    HomeComponent, PackageComponent, SnorkelingComponent,
    FeedbackComponent, TourCarouselComponent, TravelPackageComponent
  ],
  providers: [ServiceService]
})
export class HomeModule { }
