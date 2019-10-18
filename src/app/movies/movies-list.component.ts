import {Component} from '@angular/core'

@Component({
  selector:"movie-list",
  template:`
    <div>All Movies</div>

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
    Rating:"3 stars"

  }

}
