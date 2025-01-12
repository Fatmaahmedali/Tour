import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-carousel',
  templateUrl: './tour-carousel.component.html',
  styleUrls: ['./tour-carousel.component.css']
})
export class TourCarouselComponent {
  @Input() products: any[]=[];
  @Input() responsiveOptions: any[]=[];
  @Input() Number:any;
}
