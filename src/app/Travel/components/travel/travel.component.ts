import { Component, OnInit } from '@angular/core';
import { TravelservicesService } from '../../service/travelservices.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit {
  group: any;
  currentRoute: any;
  id: any;
  loading: boolean = false;
  constructor(private service:TravelservicesService ,private router:Router,private route: ActivatedRoute){}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.getGroup();
    })
  }
  getGroup() {
    this.loading = true;
    this.service.Getgroup().subscribe((res: any) => {
      this.group = res.map((item: any) => {
        if (item.description) {
          item.description = this.cleanHtml(item.description);
        }
        return item;
      });
      this.loading = false; 
    }, (error) => {
      this.loading = false;
      console.error('Error fetching group data:', error);
    });
  };

  cleanHtml(rawHtml: string): string {
    return rawHtml.replace(/<\/?[^>]+(>|$)/g, "");
  }
trackRoute() {
  this.router.events.subscribe(() => {
    this.currentRoute = this.router.url;
  });
}
}
