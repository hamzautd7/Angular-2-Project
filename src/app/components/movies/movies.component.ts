import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

import * as io from "socket.io-client";

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent implements OnInit { 
    popularList:Array<Object>;
    theatersList:Array<Object>;
    searchStr: string;
    searchRes:Array<Object>;

    socket = io('http://localhost:3000');
    
    constructor(private _movieService: MovieService){
       
        this._movieService.getPopular().subscribe(res => {
            this.popularList = res.results;
        });
        
        this._movieService.getInTheaters().subscribe(res => {
            this.theatersList = res.results;
        });
    }
    
    ngOnInit() {
         this.socket.emit('hello', {hello: 'Hello'});
    }

    searchMovies(){
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
            
        });
    }
}
