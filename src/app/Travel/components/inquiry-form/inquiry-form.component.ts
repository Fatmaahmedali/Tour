import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../Shared/Components/modal/modal.component';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.css']
})
export class InquiryFormComponent implements OnInit {
  @Input() data: any;
  @Input() group: any;
  @Input() routeType: any;
  formFields = [
    { name: 'title', label: 'Title', type: 'select', options: ['Mr.', 'Mrs.', 'Ms.'], value: 'Mr.', },
    { name: 'fullname', label: 'Full Name', type: 'text', validators: ['required'], validationErrorMessage: 'Full Name is required.' },
    { name: 'email', label: 'Email Address', type: 'email', validators: ['required', 'email'], validationErrorMessage: 'Email is required.' },
    { name: 'phone', label: 'Phone Number', type: 'tel', validators: ['required'], validationErrorMessage: 'Phone Number is required.' },
    { name: 'adults', label: 'Adults', type: 'number', validationErrorMessage: 'Number of Adults is required.' },
    { name: 'kids', label: 'Kids', type: 'number',  validationErrorMessage: 'Number of Kids is required.' },
    { name: 'arrival', label: 'Arrival', type: 'date',  validationErrorMessage: 'Arrival Date is required.' },
    { name: 'departure', label: 'Departure', type: 'date', validationErrorMessage: 'Departure Date is required.' },
    { name: 'tourDate', label: 'Tour Date', type: 'date', validationErrorMessage: 'Tour Date is required.' },
    { name: 'pickupLocation', label: 'Pickup Location', type: 'text' },
    { name: 'hotelName', label: 'Hotel Name', type: 'text' },
    { name: 'message', label: 'Your Message', type: 'textarea' },
  ];
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}
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
  }
}
