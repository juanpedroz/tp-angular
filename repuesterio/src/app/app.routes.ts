import { Routes, RouterModule } from '@angular/router';
import { ContactoRepuesterio } from './contacto-repuesterio/contacto-repuesterio';
import { HomeRepuesterio } from './home-repuesterio/home-repuesterio';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeRepuesterio
  },
  {
    path: 'contacto',
    component: ContactoRepuesterio
  },
];
