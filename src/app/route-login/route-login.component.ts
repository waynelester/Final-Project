import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.scss']
})
export class RouteLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 goToSearch() {
    this.router.navigate([`/movie`])
  }
}
