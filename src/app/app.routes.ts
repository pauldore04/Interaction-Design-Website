import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatIsInteractionDesignComponent } from './what-is-interaction-design/what-is-interaction-design.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-is-interaction-design', component: WhatIsInteractionDesignComponent },
  { path: '**', redirectTo: '' }
];
