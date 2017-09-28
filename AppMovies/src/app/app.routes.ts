import { RouterModule, Routes } from '@angular/router';

import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMoviesComponent } from './components/detail-movies/detail-movies.component';


const app_routes: Routes = [
  { path: 'list-movies', component: ListMoviesComponent },
  { path: 'detail-movies', component: DetailMoviesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'list-movies' }
];

export const app_routing = RouterModule.forRoot(app_routes);
