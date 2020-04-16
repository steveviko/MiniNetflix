import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import { Injectable } from "@angular/core"
import {MovieService} from '../shared/movie.service'


@Injectable()

export class MovieRouteActivator implements CanActivate {
  constructor(private movieService:MovieService,private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot){
   const movieExists= !! this.movieService.getMovie( +route.params['id'])

   if(!movieExists)
     this.router.navigate(['/404'])

    return movieExists

  }
}
