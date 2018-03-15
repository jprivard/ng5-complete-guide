import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>I'm the App Component</h3><app-servers></app-servers>`,
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'app';
}
