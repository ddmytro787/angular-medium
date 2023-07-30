import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <button
        mat-raised-button
        routerLink="resolvers-guards-strategy"
        routerLinkActive="active"
        #resolversGuardsNavItem="routerLinkActive"
        [color]="resolversGuardsNavItem.isActive && 'primary'">
      Resolvers/Guards Strategy
    </button>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
}
