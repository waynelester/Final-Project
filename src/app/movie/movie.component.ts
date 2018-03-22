import { Component, OnInit, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  data: any;
  savedMovie: any;
 // results: object;

  constructor(private _movie: MovieService, private _user: UserService) { 
    // this.currentMovie = _movie.currentMovie
  }

  ngOnInit() {
  // this._movie.getData().subscribe(data => console.log(data))
  }
  searchMovie(movie){
    this._movie.getData(movie)
      .subscribe(response => {
        console.log(response)
      this.data = response["results"];
        console.log(this.data)
      }
      )
  }
  getMovie(movie){
    this.savedMovie = this._movie.selectMovie(movie);
    
  }
  // selectMovie(saver){
  //   this.savedMovie = saver;
  //   console.log(this.savedMovie.title +" has been saved")
  //   console.log(this.savedMovie)
    
  // }
  addFave(movie) {
  this._user.addFavorite(movie)
  .subscribe(response => {
    console.log(response);
  });
}
}