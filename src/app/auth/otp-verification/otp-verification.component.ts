import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Register } from '../register/register.model';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent implements OnInit {
  successful: boolean = false;
  changePassword: boolean;
  userData: Register;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.userData = history.state.userData;
    this.changePassword = history.state.changePassword;
  }

  checkOtp() {
    this.successful = !this.successful;
    this.authService.createUser(this.userData);
  }
}
