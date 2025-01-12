import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() formFields: any[] = [];
  @Output() formSubmitted = new EventEmitter<any>();
  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder , private PostService: SharedService) {}
  ngOnInit(): void {
    this.setupForm();
  }
  setupForm() {
    const formGroup: { [key: string]: any } = {};
    this.formFields.forEach(field => {
      const mappedValidators: ValidatorFn[] = this.mapValidators(field.validators);
      formGroup[field.name] = [field.value || '', mappedValidators];
    });
    this.form = this.fb.group(formGroup);
  }
  mapValidators(validatorStrings: string[]): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (!validatorStrings || validatorStrings.length === 0) {
      return validators;
    }
    if (validatorStrings.includes('required')) {
      validators.push(Validators.required);
    }
    if (validatorStrings.includes('email')) {
      validators.push(Validators.email);
    }
    return validators;
  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;  
    if (this.form.invalid) {
      return;
    }
    console.log("Form submitted successfully:", this.form.value);
    this.formSubmitted.emit(this.form.value);
    this.PostService.postOfData(this.form.value).subscribe((res): any => {
      console.log('Data submitted successfully to Firebase:', res);
      this.form.reset();
    });
  }
}
