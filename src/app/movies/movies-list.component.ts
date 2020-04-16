import {Component, OnInit} from '@angular/core'
import { MovieService } from './shared/movie.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from "@angular/router";

declare let toastr
@Component({

  template:`
  <div>
  <h1>5D Cinamax Movie Lists  </h1>
  <hr>
    <div class="row">
      <div class="col-md-4" *ngFor="let movie of movies ">
        <movie-thumbnail   [movie]="movie"></movie-thumbnail>

      </div>
    </div>
  </div>  `

})

export class MovieListComponent implements OnInit {
  movies:any

 constructor(private movieService:MovieService, private toastr:ToastrService,private route:ActivatedRoute){

 }
  ngOnInit(){
   this.movies = this.route.snapshot.data ['movies']
 }


}
