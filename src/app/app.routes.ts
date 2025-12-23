import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/pages/home/home.component';
import { AboutUsComponent } from './layouts/pages/about-us/about-us.component';
import { langGuard } from './core/guards/lang.guard';

export const routes: Routes = [
  // redirect root → /en
  {
    path: '',
    redirectTo: 'en',
    pathMatch: 'full'
  },

  // language prefix
  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      }
    ]
  },

  // fallback
  {
    path: '**',
    redirectTo: 'en'
  }
];
