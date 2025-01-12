import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-travel-package',
  templateUrl: './travel-package.component.html',
  styleUrls: ['./travel-package.component.css']
})
export class TravelPackageComponent {
  @Input() Travelpackage: any;
  @Input() routeType: string = 'data';
  currentRoute: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }
  truncateDescription(description: any, limit: number): string {
    if (typeof description !== 'string') {
      description = description.toString();
    }
    const words = description.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : description;
  }
}
