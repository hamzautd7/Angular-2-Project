import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {routing} from './app.routing';

import { AppComponent } from './app.component';

import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';

import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent, MoviesComponent, MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, JsonpModule, FormsModule, routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
