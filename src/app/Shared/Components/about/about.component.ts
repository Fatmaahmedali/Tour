import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dynamicText:any;
  loading:boolean=false;
  formFields = [
    { name: 'title', label: 'Title', type: 'select', options: ['Mr.', 'Mrs.', 'Ms.'], value: 'Mr.', },
    { name: 'fullname', label: 'Full Name', type: 'text', validators: ['required'], validationErrorMessage: 'Full Name is required.' },
    { name: 'email', label: 'Email Address', type: 'email', validators: ['required', 'email'], validationErrorMessage: 'Email is required.' },
    { name: 'phone', label: 'Phone Number', type: 'tel', validators: ['required'], validationErrorMessage: 'Phone Number is required.' },
    { name: 'message', label: 'Your Message', type: 'textarea' },
  ];
  constructor(private modalService: NgbModal ,private About:SharedService) {}
  ngOnInit(): void {
    this.Getdata()
  }
  onFormSubmit(formData: any) {
    this.openModal(formData);
  }
  openModal(data: any) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.message = 'Make sure you complete the recaptcha verification before submitting.';
    modalRef.componentInstance.close.subscribe(() => {
      modalRef.close();
    });
    console.log('Form Data:', data);
  }
  Getdata(){
    this.loading=true;
    this.About.getAboutData().subscribe((res:any)=>{
      this.dynamicText=res;
      console.log('Dataof about' , this.dynamicText);
      this.loading=false
    })
  }
}
