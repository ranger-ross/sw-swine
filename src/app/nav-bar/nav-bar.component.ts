import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from '../app.routing.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  readonly routes = RouteConstants;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route: string) {
      this.router.navigate([route], { skipLocationChange: true });
  }


}
