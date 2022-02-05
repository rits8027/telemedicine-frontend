import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  otpVerification(form: NgForm) {
    if (form.invalid) return;
    const userData: Register = {
      password: form.value.password,
      phoneNumber: form.value.phone,
      name: form.value.name,
      userType: form.value.userType,
      email: form.value.email,
      dob: form.value.dob,
      confirm_password: form.value.password,
      gender: form.value.gender,
      bloodGroup: form.value.bloodGroup,
    };
    this.router.navigate(['/auth/otp-verification'], {
      state: {
        changePassword: false,
        userData: userData,
      },
    });
  }
}
