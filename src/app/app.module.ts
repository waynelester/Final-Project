import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserService } from './user.service';
import { RouteLoginComponent } from './route-login/route-login.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        MovieComponent,
        MovieSearchComponent,
        LoginComponent,
        RegisterComponent,
        FavoritesComponent,
        RouteLoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING, 
        routes,
        HttpClientModule
    ],
    providers: [MovieService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
