import { Routes } from '@angular/router';
import { SubHomeComponent } from './subHome';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { AppComponent } from './app.component';
import { DataResolver } from './app.resolver';

export const SUBROUTES: Routes = [
  { path: '', component: SubHomeComponent },
  { path: 'home', component: SubHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];
