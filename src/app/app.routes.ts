import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatIsInteractionDesignComponent } from './what-is-interaction-design/what-is-interaction-design.component';
import { CatchTheGoldenLightComponent} from './catch-the-golden-light/catch-the-golden-light.component';
import { HotOrColdComponent } from './hot-or-cold/hot-or-cold.component';
import { WattHappensComponent } from './watt-happens/watt-happens.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'what-is-interaction-design', component: WhatIsInteractionDesignComponent },
  { path: 'catch-the-golden-light', component: CatchTheGoldenLightComponent},
  { path: 'hot-or-cold', component: HotOrColdComponent},
  { path: 'watt-happens', component: WattHappensComponent},
  { path: '**', redirectTo: '' }
];
