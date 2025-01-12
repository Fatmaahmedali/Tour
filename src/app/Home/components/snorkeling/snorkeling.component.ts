import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../package/package.model';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-snorkeling',
  templateUrl: './snorkeling.component.html',
  styleUrls: ['./snorkeling.component.css']
})
export class SnorkelingComponent {
  truncateDescription(description: string, limit: number): string {
    const words = description.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ')  : description;
  }
  @Input() routeType: string = 'data'; 
  @Input() element: any ;
  @Output() Clicked = new EventEmitter<string>()
  onclick(event:any){
    this.Clicked.emit(event)
  }
}
