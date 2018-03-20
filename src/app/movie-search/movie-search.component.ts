import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  
  @Input() movieID;
  
  constructor(private _movieSearch: MovieService) {  }
    addMovie(movie) {
      console.log(movie);
    }
  ngOnInit() {
  }

}
