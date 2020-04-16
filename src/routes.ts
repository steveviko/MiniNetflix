import { Routes } from '@angular/router'


import { MovieListComponent } from "./app/movies/movies-list.component";
import { MovieDetailComponent } from "./app/movies/movie-details/movie-detail.component";
import {CreateMovieComponent} from './app/movies/create-movie.component'
import { Error404Component } from "./app/errors/error-movie.component"
import {MovieRouteActivator} from './app/movies/movie-details/movie-route-activator.service'
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { MovieListResolver } from './app/movies/movie-list-resolver.service';



export const appRoutes:Routes = [
  {path: 'movies/new', component:CreateMovieComponent,canDeactivate:['CanDeactivateCreateMovie']},
  {path: 'movies', component: MovieListComponent,resolve:{movies:MovieListResolver}},
  {path: '404', component: Error404Component},
  {path: 'movies/:id', component:MovieDetailComponent,canActivate:[MovieRouteActivator]},
  {path: '',redirectTo: '/movies', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}


]
