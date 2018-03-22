import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

    baseUrl: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers/";
    baseMovies: string = "/movies?access_token=";
   

    login(user){
        console.log(user, "2nd")
            return this._http.post(this.baseUrl + "login", user);
}
    register(user){
        console.log(user, "registered")
        return this._http.post(this.baseUrl, user);
    }
      addFavorite(movie){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    console.log(this.baseUrl + userId + this.baseMovies + token);
    delete movie.id;
    return this._http.post(this.baseUrl + userId + this.baseMovies + token, movie)
  }


}
