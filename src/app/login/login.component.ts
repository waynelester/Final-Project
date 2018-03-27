import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private _user: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  loginSubmit(){
  console.log(this._user, "submit component - 1st");
  this._user.login(this.user)
  .subscribe(
    (userRes: any ) =>{ 
      console.log(userRes, "reg")
      this.router.navigate([`/movie`])
      sessionStorage.setItem('token', userRes.token);
      sessionStorage.setItem('userId', userRes.userId);
    }
    )
  }
}
