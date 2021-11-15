import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Register } from './register/register.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  saveToken(data) {
    this.token = data.token;
    this.authStatusListener.next(true);
    this.router.navigate(['/home']);
  }

  createUser(userData: Register) {
    this.http
      .post<{ data: any; message: string; success: boolean }>(
        'http://localhost:8000/api/users/register-user',
        { ...userData }
      )
      .subscribe((response) => {
        if (response.success) {
          this.saveToken(response.data);
        }
      });
  }

  login(email: string, password: string) {
    this.http
      .post<{ data: any; message: string; success: boolean }>(
        'http://localhost:8000/api/users/create-session',
        {
          email: email,
          password: password,
        }
      )
      .subscribe((response) => {
        if (response.success) {
          this.saveToken(response.data);
        }
      });
  }
}
