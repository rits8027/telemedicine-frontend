import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  otpVerification() {
    this.router.navigate(['/auth/otp-verification'], {
      state: {
        email: 'shaw8wit@gmail.com',
        phone: '9347592067',
        changePassword: false,
      },
    });
  }
}
