import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.getUserDetails(this.authService.getUserId());
  }

  logout() {
    this.authService.logout();
  }
}
