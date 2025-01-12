import { Component  } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Product } from './package.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent {
product: any;
neww: any;
responsiveOptions: any[] = [];
package: any;
snorkeling: any;
luxor: any;
Desert: any;
Paragraph: any;
value: number = 5;

constructor(private productService: ServiceService, public router: Router) {}

ngOnInit() {
  this.getData();
  this.responsiveOptions = [
    { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
    { breakpoint: '991px', numVisible: 2, numScroll: 1 },
    { breakpoint: '767px', numVisible: 1, numScroll: 1 },
  ];
}

getData() {
  this.productService.getAllProducts().subscribe((data) => {
    this.neww = data;
  });
  this.productService.getLuxor().subscribe((data) => {
    this.luxor = data;
  });
  this.productService.getDesert().subscribe((data) => {
    this.Desert = data;
  });
  this.productService.getsnorkeling().subscribe((data) => {
    this.snorkeling = data;
  });
  this.productService.getpackage().subscribe((res) => {
    this.package = res;
  });
  this.productService.getPargraph().subscribe((data) => {
    this.Paragraph = data;
  });

    this.productService.getsnorkeling().subscribe(
      data => {
        this.product = data;
        // console.log(this.products);
      },
    );

}
}
