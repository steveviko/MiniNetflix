import { Component } from '@angular/core';

import {MovieListComponent } from './movies/movies-list.component';

@Component({
  selector: 'movie-app',
  template: '<movie-list></movie-list>'

})
export class MovieAppComponent {
  title = 'Mini-Netflix';
}
