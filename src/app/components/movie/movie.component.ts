import {Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
// import {config} from './sharing/config.js';
// import {edge} from './sharing/edge-attachmediastream.js';
// import {fun} from './sharing/skylink.js';
// import {enc} from './sharing/enc-base64.js'; 
@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
})
export class MovieComponent implements OnInit{
    movie: Object;
    
    constructor(
        private router:ActivatedRoute, 
        private _movieService:MovieService){
            this.url = 'file:///C:/Users/M.Hamza.Naveed/Desktop/fyp2/fyp/src/app/components/movie/Guardians%20of%20the%20Galaxy.mp4';
    this.player = false;
    }
    
    ngOnInit(){
        console.log('CAPTY');
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                this.movie = movie;
                
            });
        });
    }
    public getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }



  private _elementRef: ElementRef
  private player: any; 
  public url:any;
  public idx:any;
  // constructor initializes our declared vars
    


  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered
  ngAfterViewInit() {
    
    // ID with which to access the template's video element
    let el = 'video_' + this.idx;
    
    // setup the player via the unique element ID
    this.player = document.getElementById('video_1'), {}, function() {
      
      // Store the video object
      var myPlayer = this, id = myPlayer.id();
      
      // Make up an aspect ratio
      var aspectRatio = 264/640;
      
      // internal method to handle a window resize event to adjust the video player
      function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width);
        myPlayer.height( width * aspectRatio );
      }
      
      // Initialize resizeVideoJS()
      resizeVideoJS();
      
      // Then on resize call resizeVideoJS()
      window.onresize = resizeVideoJS;
    };
  }
    
}



@Component({
    templateUrl: "movie.component.html"
})
export class MainPageComponent {

    @ViewChild('dataContainer') dataContainer: ElementRef;

    loadData() {
        this.dataContainer.nativeElement.innerHTML = "sd";

    }
}
