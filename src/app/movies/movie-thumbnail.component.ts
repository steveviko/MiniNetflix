import {Component, Input,Output,EventEmitter } from '@angular/core'
import { ToastrService } from '../common/toastr.service'

declare let toastr
@Component({
  selector:'movie-thumbnail',
  template:`
  <div [routerLink]="['/movies',movie.id]"class="well hoverwell thumbnail">
      <div>Name:{{movie.name}}</div>
      <div>Date: {{movie.date}}</div>
      <div [ngSwitch]="movie?.time">Time: {{movie?.time}}
        <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
        <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
        <span *ngSwitchDefault> (Normal Start)</span>
      </div>
      <div>Price: Ugx {{movie.price}}</div>
      <div *ngIf="movie?.location">Location:
      <span> {{movie.location.address}}</span>
      <span> {{movie.location.city}}</span>
      <span> {{movie.location.country}}</span>
      </div>
      <div [hidden]="!movie?.onlineUrl">OnlineUrl : {{movie.onlineUrl}}</div>
      <button class="btn btn-primary" (click)="handleThumbnailClick(movie.name)" >View Details</button>
  </div>

  `,
  styles:[

    `
    .thumbnail{ min-height:210px;}
    `
  ]
})

export class MovieThumbnailComponent{

 constructor( private toastr:ToastrService){

}
@Input() movie:any

@Output() eventClick = new EventEmitter()

handleClick(){
  this.eventClick.emit(this.movie.name)
}

logFoo(){
  console.log('Price: ', this.movie.price)
}


handleThumbnailClick(movieName){
  this.toastr.success(movieName)
 }
}
