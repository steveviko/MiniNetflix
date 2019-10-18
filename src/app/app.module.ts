import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MovieAppComponent } from './movie-app.component';

@NgModule({
  declarations: [
    MovieAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MovieAppComponent]
})
export class AppModule { }
