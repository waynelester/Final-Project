import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any = {};

  constructor(private _user: UserService, private router: Router) { }
 registerSubmit(){
  console.log(this._user, "1st");
  this._user.register(this.user)
  .subscribe( ( userRes: any ) => { 
    console.log(userRes, "res") 
   this.router.navigate([`/movie`])
   sessionStorage.setItem('token', userRes.token);
   sessionStorage.setItem('userId', userRes.userId);
     }
  )
  }
  
  ngOnInit() {
  }

}
