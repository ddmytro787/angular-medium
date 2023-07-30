import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'resolvers-guards-strategy',
    loadChildren: () => import('./examples/resolvers-guards-strategy/resolvers-guards.module').then(m => m.ResolversGuardsModule),
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
