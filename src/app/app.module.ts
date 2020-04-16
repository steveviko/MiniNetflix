import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'



import { AppRoutingModule } from './app-routing.module'
import { MovieAppComponent } from './movie-app.component'
import {MovieListComponent } from './movies/movies-list.component'
import {MovieThumbnailComponent} from './movies/movie-thumbnail.component'
import { NavMoviesComponent } from './nav/nav-movies.component'
import { MovieService } from './movies/shared/movie.service'
import {ToastrService } from './common/toastr.service'
import { MovieDetailComponent }  from './movies/movie-details/movie-detail.component'
import {appRoutes } from '../routes'
import {CreateMovieComponent } from './movies/create-movie.component'
import { Error404Component } from "./errors/error-movie.component"
import { MovieRouteActivator} from './movies/movie-details/movie-route-activator.service'
import { CanDeactivate } from '@angular/router/src/utils/preactivation'
import {  MovieListResolver} from "./movies/movie-list-resolver.service"
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MovieAppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    NavMoviesComponent,
    MovieDetailComponent,
    CreateMovieComponent,
    Error404Component,
    SidebarComponent

  ],

  providers: [
    MovieService,
    ToastrService,
    MovieRouteActivator,
    MovieListResolver,
    {provide:'CanDeactivateCreateMovie', useValue:checkDirtyState}

  ],
  bootstrap: [MovieAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateMovieComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this movie, do you really want to cancel ?')
  return true

}

