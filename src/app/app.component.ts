import { Component } from '@angular/core';
interface ServerElement {
  type: 'server' | 'blueprint'; // Specify the allowed types
  name: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tours';
}
