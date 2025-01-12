import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent {
  All: any;
  para: any;
  luxor:any;
  Desert:any;
  family:any;
  snorkeling:any;
  package:any;
  currentRoute: string = '';
  routeData: any[] = [
    { path: '/all', label: 'All Hurghada Excursions', data: 'All', titleKey: 0 },
    { path: '/cairo', label: 'Hurghada Cairo Day Trips', data: 'cairo', titleKey: 1  },
    { path: '/luxor', label: 'Hurghada Luxor Day Trips', data: 'luxor', titleKey: 2 },
    { path: '/snorkeling', label: 'Hurghada Activities', data: 'snorkeling', titleKey: 3},
    { path: '/Desert', label: 'Desert Safari', data: 'Desert', titleKey: 4},
    { path: '/family', label: 'Tours for Families', data: 'family',titleKey:null }
  ];
loading: boolean=false;
  Paragraph: any;
  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private productService: ServiceService
  ) {}
  ngOnInit() {
    this.trackRoute();
    this.getdata();
  }

  getdata() {
    this.loading=true;
    this.productService.getAllProducts().subscribe((data:any) => {
      this.All = data;
      this.loading = false;
    });
    this.productService.getLuxor().subscribe((data:any) => {
      this.luxor = data;
    });
    this.productService.getDesert().subscribe((data:any) => {
      this.Desert = data;
    });
    this.productService.getsnorkeling().subscribe((data) => {
      this.snorkeling = data;
    });
    this.productService.getpackage().subscribe((res) => {
      this.package = res;
    });
    this.productService.getallfamily().subscribe((data: any) => {
      this.family = data;
    });
    this.productService.getparagharph().subscribe((res) => {
      this.para = res;
      if (this.para && this.para[0]) {
        this.para[0].item = this.sanitizer.bypassSecurityTrustHtml(this.para[0].item);
        this.para[0].title = this.sanitizer.bypassSecurityTrustHtml(this.para[0].title);
      }
    });
    this.productService.getPargraph().subscribe((data) => {
      this.Paragraph = data;
    });
  }

  trackRoute() {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
  getDataForRoute(dataKey: string) {
    switch (dataKey) {
      case 'All':
        return this.All;
      case 'cairo':
        return this.luxor;
      case 'luxor':
        return this.luxor;
      case 'Desert':
        return this.Desert;
      case 'snorkeling':
        return this.snorkeling;
      case 'family':
        return this.family;
      default:
        return [];
    }
  }
}
