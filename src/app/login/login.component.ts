import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private _user: UserService) { }

  ngOnInit() {
  }
  
  loginSubmit(){
  console.log(this._user, "submit component - 1st");
  this._user.login(this.user)
  .subscribe(
    userReg => console.log(userReg, "reg")
    )
  }
}
