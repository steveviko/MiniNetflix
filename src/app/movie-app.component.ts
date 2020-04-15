import { Component } from '@angular/core';

import {MovieListComponent } from './movies/movies-list.component';
import {NavMoviesComponent } from './nav/nav-movies.component';

@Component({
  selector: 'movie-app',
  template: `
  <nav-movies></nav-movies>
  <sidebar></sidebar>
  <router-outlet></router-outlet>

  `

})
export class MovieAppComponent {
  title = 'Mini-Netflix';
}
