import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  loading: boolean = true;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
}}
