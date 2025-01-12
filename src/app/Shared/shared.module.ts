import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { AboutComponent } from './Components/about/about.component';
import { BreadComponent } from './Components/bread/bread.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';  
import{ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { InputFieldComponent } from './Components/input-field/input-field.component';
import { ModalComponent } from './Components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './Components/contact/contact.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    AboutComponent,
    BreadComponent,
    FooterComponent,
    InputFieldComponent,
    ModalComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    AboutComponent,
    BreadComponent,
    FooterComponent,
    BreadcrumbModule,
    InputFieldComponent,
    ModalComponent,
    ContactComponent
  ],
})
export class SharedModule { }
