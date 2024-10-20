import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lesson 3 Template Refrence Variable';
  names: string[] = ['hassan', 'Raheel', 'Bisham', 'Zaid'];

  addName(arg: HTMLInputElement) {
    this.names.push(arg.value);
    arg.value = '';
  }
}
