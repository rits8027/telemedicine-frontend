import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePassword() {
    this.router.navigate(['/auth/otp-verification'], {
      state: {
        email: 'shaw8wit@gmail.com',
        phone: '9347592067',
        changePassword: true,
      },
    });
  }
}
