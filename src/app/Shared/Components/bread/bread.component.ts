import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';  // Import MenuItem from PrimeNG
import { ActivatedRoute, Router, RouterLink } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {
  items: MenuItem[] = [];  // Breadcrumb items
  value: MenuItem[] = [];  // Current breadcrumb trail
  home: MenuItem = { label: 'Home', routerLink: '/home' ,};
  egyptDayTours: MenuItem = { label: 'Egypt Day Tours', routerLink: '/all' };
  @Input() image!: string;
  @Input() title!:string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.updateBreadcrumb();
    });
    this.updateBreadcrumb();
  }
  updateBreadcrumb() {
    const currentRoute = this.router.url;
    let dynamicBreadcrumb: MenuItem[] = [];
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (currentRoute === '/group') {
        dynamicBreadcrumb.push({ label: 'Egypt Tours Packages', routerLink: '/group' });
      } else if (currentRoute === '/about') {
        dynamicBreadcrumb.push({ label: 'About Us', routerLink: '/about' });
      } else if (currentRoute === '/alldetails') {
        dynamicBreadcrumb.push({ label: 'Egypt Travel Packages', routerLink: '/alldetails' });
      } else if (currentRoute === '/Contact') {
        dynamicBreadcrumb.push({ label: 'Contact Us', routerLink: '/Contact' });
      } else if (currentRoute === '/all') {
        dynamicBreadcrumb.push({ label: 'Hurghada Excursions', routerLink: '/all' });
      } else if (currentRoute === '/cairo') {
        dynamicBreadcrumb.push({ label: 'Cairo Tours from Hurghada', routerLink: '/cairo' });
      } else if (currentRoute === '/luxor') {
        dynamicBreadcrumb.push({ label: 'Luxor Tours from Hurghada', routerLink: '/luxor' });
      } else if (currentRoute === '/snorkeling') {
        dynamicBreadcrumb.push({ label: 'Hurghada Snorkeling', routerLink: '/snorkeling' });
      } else if (currentRoute === '/Desert') {
        dynamicBreadcrumb.push({ label: 'Safari Hurghada Egypt', routerLink: '/Desert' });
      } else if (currentRoute === '/family') {
        dynamicBreadcrumb.push({ label: 'Hurghada Things to Do for Families', routerLink: '/family' });
      }
      if (currentRoute.startsWith('/details/') || currentRoute.startsWith('/group/')) {
        if (currentRoute.includes('/cairo')) {
          dynamicBreadcrumb.push({ label: 'Luxor Tours from Hurghada', routerLink: '/cairo' });
        }else if (currentRoute.includes('group')) {
          dynamicBreadcrumb.push({ label: 'Egypt Tours Packages', routerLink: '/group' });
        }
      }
        if (this.title) {
          dynamicBreadcrumb.push({ label: this.title });
        }
      this.value = [this.egyptDayTours,...dynamicBreadcrumb];
    });
  }
  onBreadcrumbClick(event: any): void {
    const routerLink = event.item.routerLink;
    console.log('Breadcrumb Clicked:', routerLink);
    this.router.navigate([routerLink]);
  }
}
