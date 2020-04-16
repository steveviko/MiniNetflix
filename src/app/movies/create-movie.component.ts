import { Component } from "@angular/core"
import {Router} from '@angular/router'

@Component({
  template:`
<h1>New Movie</h1>
<hr>
<div class="col-md-6">
<h3>[create Movie Form will go here]</h3>
<br>
<br>
<button type="submit" class="btn btn-primary"> Save </button>
<button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>


</div>
  `
})

export  class CreateMovieComponent{
  isDirty:boolean = true
constructor (private router:Router){

}

cancel(){
this.router.navigate(['/movies'])
}

}
