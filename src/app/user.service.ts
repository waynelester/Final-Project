import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

    baseUrl: string = "http://wayne-spring-2018-phortonssf.c9users.io:8080/api";
    appUsers: string = "/appUsers/";
    upsert: string = "/movies/upsertWithWhere?";
   deleteMovie: string = "/movies/";
    baseMovies: string = "/movies?access_token=";
    tokenString: string = "&access_token=";
   // /api/movies/upsertWithWhere?where=movie title + userId + access_token=QQqqxUPdMQOXBscXEVbyaEDODYngHOYxgBFsAj0SJdHXeJJvSNGfHtOpXGhDLvnZ
// http://wayne-spring-2018-phortonssf.c9users.io:8080/api/movies/upsertWithWhere?where=%7B%20%22title%22%3A%20%22Fight%20Club%22%2C%20%22userId%22%3A%20%225ab0737e6a8275ce3881f8c2%22%20%7D&access_token=QQqqxUPdMQOXBscXEVbyaEDODYngHOYxgBFsAj0SJdHXeJJvSNGfHtOpXGhDLvnZ

   

    login(user){
        console.log(user, "2nd")
            return this._http.post(this.baseUrl + this.appUsers + "login", user);
}
    register(user){
        console.log(user, "registered")
        return this._http.post(this.baseUrl + this.appUsers, user);
    }
      addFavorite(movie){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    movie.userId = userId;
    console.log(this.baseUrl + userId + this.baseMovies + token);
    delete movie.id;
    return this._http.post(this.baseUrl + this.upsert + "[where][title]=" + movie.title + this.tokenString + token, movie)
  }
    deleteFavorite(movie){
    let userId = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
      console.log("Deleting " + movie.title);
      // delete movie.id;
      return this._http.delete(this.baseUrl + this.appUsers + userId + this.deleteMovie + movie.id + token, movie)
}
//create double delete function to chain deleting on front end and back end
// http://wayne-spring-2018-phortonssf.c9users.io:8080/api/appUsers/5ab0737e6a8275ce3881f8c2/movies/5ab9ae7e86ba21007b6c6e4e?access_token=GyUEc3c0HrB7ETjtSF40MZCCe1y0u117fQtIHXqukq1fMD2aXoT5s3lOWSAPQtWK
// http get to retrieve faves
}
