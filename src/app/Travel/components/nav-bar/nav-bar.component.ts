import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() Navbar:any;
  @Input() currentLink:any;
  constructor(private router:Router){}
  onNavLinkClick(fragment: string) {
    this.currentLink = fragment;
    this.router.navigate([], { fragment: fragment });
  }
}
