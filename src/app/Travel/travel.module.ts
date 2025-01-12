import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TravelComponent } from './components/travel/travel.component';
import { TravelDetailsComponent } from './components/Travel-details/travel-details.component';
import { HomeModule } from '../Home/home.module';
import { SharedModule } from '../Shared/shared.module';
import { TravelservicesService } from './service/travelservices.service';
import { AppRoutingModule } from '../app-routing.module';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SpyDirective, SpyTargetDirective, SpyTargetContainerDirective } from '@thejlifex/ngx-scroll-spy';
import { CardModule } from 'primeng/card';
import{ReactiveFormsModule} from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [TravelComponent, TravelDetailsComponent, InquiryFormComponent, NavBarComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    NgbCollapseModule,
    AppRoutingModule,
    SpyDirective,
    RouterModule,
    SpyTargetDirective,
    SpyTargetContainerDirective,
    CardModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    HomeModule
  ],
  exports: [TravelComponent, TravelDetailsComponent,InquiryFormComponent,CardComponent],
  providers: [TravelservicesService]
})
export class TravelModule {}
