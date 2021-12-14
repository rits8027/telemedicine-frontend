import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getResult(
    name: string,
    age: string,
    weight: string,
    bp: string,
    message: string[]
  ) {
    return this.http.post<{ result: string }>(AppSettings.CHATBOT, {
      Name: name,
      Age: age,
      Weight: weight,
      'Blood Pressure': bp,
      message: message,
    });
  }
}
