import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TravelservicesService } from '../../service/travelservices.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { catchError, filter, of } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css'],
})
export class TravelDetailsComponent {
  loading: boolean = false;
  data: any ;
  id: any;
  navbarLinks: any[] = [];
  content: string = '';
  currentActiveLink: string = '';
  group: any;
  currentRoute: any;
  routeType: string = '';
  constructor(private service: TravelservicesService,private route: ActivatedRoute,private sanitizer: DomSanitizer, private router: Router ,     private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.routeType = this.route.snapshot.routeConfig?.path?.includes('group') ? 'group' : 'details';
      console.log(`Current Route Type: ${this.routeType} with ID: ${this.id}`);
      if (this.routeType === 'group') {
        this.getGroupDetails();
      } else if (this.routeType === 'details') {
        this.getProductDetails();}
    });
  }

  getProductDetails(): void {
    this.loading =true
    this.service.getProductAll(this.id).pipe(
      catchError((error) => {
        console.error('Error fetching product details:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe((res) => {
      this.data = res || {};
      console.log('Product Data:', this.data);
      this.setupNavbarLinks();
      this.loading = false;
    });
  }

  getGroupDetails(): void {
    this.loading = true;
    this.service.getallgroup(this.id).pipe(
      catchError((error) => {
        console.error('Error fetching group details:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe((result) => {
      this.group = result || {};
      console.log('Group Data:', this.group);
      this.setupNavbarLinks();
      this.loading = false;
    });
  }
  setupNavbarLinks() {
    this.navbarLinks = [];
    const sections = [
      { name: 'Tour Details', fragment: 'Tour-Details', condition: this.data?.Days || this.group?.description },
      { name: 'Overview', fragment: 'Overview', condition: this.data?.description || this.group?.description },
      { name: 'Included', fragment: 'included', condition: this.data?.include || this.group?.include },
      { name: 'Excluded', fragment: 'Excluded', condition: this.data?.excluded || this.group?.excluded },
      { name: 'Itenary', fragment: 'Itnerary', condition: this.data?.itenary?.length > 0 || this.group?.itenary?.length > 0 },
      { name: 'Gallery', fragment: 'gallery', condition: this.data?.Gallery?.length > 0 || this.group?.Gallery?.length > 0 },
      { name: 'Map', fragment: 'map', condition: this.data?.Map || this.group?.Map },
      { name: 'Highlights', fragment: 'highlights', condition: this.data?.Highlights || this.group?.Highlights },
      { name: 'What To Take', fragment: 'whattotake', condition: this.data?.take || this.group?.take }
    ];

    sections.forEach(section => {
      if (section.condition) {
        this.navbarLinks.push({ name: section.name, fragment: section.fragment });
      }
    });

    if (this.navbarLinks.length > 0) {
      this.currentActiveLink = this.navbarLinks[0].fragment;
    }
  }
  ngAfterViewInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToFragment();
      });
  }
  scrollToFragment() {
    const fragment = this.activatedRoute.snapshot.fragment;
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  getDynamicData(name: string): SafeHtml {
    let content = '';
  const getSectionData = (section: string) => {
    return this.data?.[section] || this.group?.[section];
  };
    switch (name) {
      case 'Overview':
        content = getSectionData('description')
        break;
      case 'Included':
        content = this.createBulletList(getSectionData('include'), '#34c78e', 'y');
        break;
      case 'Excluded':
        content =  this.createBulletList(getSectionData('excluded'), 'red', 'X');
        break;
      case 'Highlights':
        content = getSectionData('Highlights');
        break;
        case 'Itenary':
          const itineraryData = getSectionData('itenary');
          if (Array.isArray(itineraryData)) {
            content = itineraryData.map((day: { header: string, details: string }) => {
              let itineraryHeader = day.header ? `<h3>${day.header}</h3>` : '';
              let itineraryDetails = this.createBulletList(day.details, '#34c78e', '✔');

              return itineraryHeader + itineraryDetails;
            }).join('');
          }
          break;
      case 'Gallery':
        content = getSectionData('Gallery')
        break;
        case 'Map':
          const mapData = getSectionData('Map');
          if (mapData) {
            content = `<iframe src="${mapData}" width="600" height="450" frameborder="0" allowfullscreen></iframe>`;
          }
          break;
          case 'What To Take':
            const takeData = getSectionData('take');
            if (takeData) {
              const take1 = Array.isArray(takeData.take1) ? takeData.take1 : [];
              const take2 = Array.isArray(takeData.take2) ? takeData.take2 : [];
              content = `
                <div class="row">
                  <div class="col-md-6">
                    <ul>
                      ${take1.map((item: string) => `<li><i class="fa-solid fa-paperclip"></i> ${item}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul>
                      ${take2.map((item: string) => `<li><i class="fa-solid fa-paperclip"></i> ${item}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `;
            }
            break;
      default:
        content = '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
  private createBulletList(content: string, color: string, symbol: string): string {
    return (content || '').split('<br>').map((line: string) => {
      return `<br><span style="display: inline-block; width: 18px; height: 18px; background-color: ${color}; border-radius: 50%; margin-right: 8px; text-align: center; line-height: 18px; font-family: 'yfont', sans-serif; color: #FFF; font-size: 12px;">${symbol}</span>${line}`;
    }).join('');
  }
}
