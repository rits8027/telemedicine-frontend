import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Register } from './register/register.model';

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

  createUser(userData: Register) {
    this.http
      .post('http://localhost:8000/api/users/register-user', { ...userData })
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }

  login(email: string, password: string) {
    this.http
      .post<{ token: string }>('http://localhost:8000/api/users/login', {})
      .subscribe((response) => {
        this.token = response.token;
        this.authStatusListener.next(true);
        this.router.navigate(['/']);
      });
  }
}
