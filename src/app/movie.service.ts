import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  savedMovies: any;

  api: string = "?api_key=e43aaac490cc35e0316bbc5bd9e5ad30";
  options: string = "&include_adult=false&language=en-US";
  base_url: string = "https://api.themoviedb.org/3/search/movie";
  
  constructor(private http: HttpClient) { }
  
  getData(query: string){
      return this.http.get(this.base_url + this.api + this.options + "&query=" + query)
    }
  

}
