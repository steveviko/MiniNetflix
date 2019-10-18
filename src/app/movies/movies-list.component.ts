import {Component} from '@angular/core'

@Component({
  selector:"movie-list",
  template:`
  <div class="panel panel-primary">
  <div class="panel-heading">List All Movies</div>
  <div class="panel-body">
       <div class="row">
          <div class="col-md-3 col-xs-12" >
            <div class="well hoverwell thumbnail">
               <h4>Name:{{movie.name}}</h4>
               <h4>Director: {{movie.director}}</h4>
               <h4>Writer: {{movie.writer}}</h4>
               <h4>Genre: {{movie.genre}}</h4>
               </div>
          </div>
       </div>
  </div>
  <div class="panel-footer"></div>
</div>

  `
})
export class MovieListComponent {
  movie ={
    id: 1,
    name:"Act of Valor",
    genre:"Action",
    director:"steve venviko",
    RunTime:"2 hours",
    Released: "20-2-2011",
    Actors:["steve","john","jane"],
    Writer:"Denzel",
    Rating:"3 stars",
    image:""

  }

}
