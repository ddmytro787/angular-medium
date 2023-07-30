import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>App Component</h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-medium';
}
