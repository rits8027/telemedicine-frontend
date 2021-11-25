import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  isDoctor: boolean;
  private userListener: Subscription;

  constructor(private authService: AuthService) {}

  setStatus() {
    this.isDoctor = this.authService.getIsDoctor();
  }

  ngOnInit(): void {
    if (this.authService.getIsUserFetched()) this.setStatus();
    this.userListener = this.authService
      .getAuthStatusListener()
      .subscribe((userFetched) => {
        if (userFetched) {
          this.setStatus();
        }
      });
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe();
  }
}
