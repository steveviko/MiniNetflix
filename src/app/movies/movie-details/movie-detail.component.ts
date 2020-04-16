import { Component } from '@angular/core'
import { MovieService } from '../shared/movie.service'
import {ActivatedRoute} from "@angular/router";



@Component({
templateUrl:'./movie-detail.component.html',
styles:[
  `
.container{padding-left:20px;padding-right:20px;}
.movie-image{height:250px;width:200px;}
.black{color:#000;font-weight:bold;}
  `
]

})

export class MovieDetailComponent {

  movie:any
  constructor(private movieService: MovieService,private route:ActivatedRoute) {

  }


  ngOnInit(){
    this.movie = this.movieService.getMovie( +this.route.snapshot.params['id'])

  }
}

