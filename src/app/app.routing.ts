import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

export const routing = RouterModule.forRoot(appRoutes);
