import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent implements OnInit {
  successful: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  checkOtp() {
    this.successful = !this.successful;
  }
}
