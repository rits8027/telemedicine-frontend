import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent implements OnInit {
  successful: boolean = false;
  email: String;
  phone: String;
  changePassword: boolean;

  constructor() {}

  ngOnInit(): void {
    this.email = history.state.email;
    this.phone = history.state.phone;
    this.changePassword = history.state.changePassword;
  }

  checkOtp() {
    this.successful = !this.successful;
  }
}
