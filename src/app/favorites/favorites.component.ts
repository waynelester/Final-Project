import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() favorites;

  constructor(private _movie: MovieService, private _user: UserService) { }
  
  ngOnInit() {
        this.favorites = this._movie.savedMovies;
  }
deleteFave(movie) {
  this._movie.deleteMovie(movie);
 
}
deleteBkFave(movie) {
  this._user.deleteFavorite(movie);
}
deleteBoth(movie){
  this.deleteFave(movie);
  this.deleteBkFave(movie);
}
}
