import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getChatbotResult(
    name: string,
    age: string,
    weight: string,
    bp: string,
    message: string[]
  ) {
    return this.http
      .post(AppSettings.CHATBOT, {
        Name: name,
        Age: age,
        Weight: weight,
        'Blood Pressure': bp,
        message: message,
      })
      .subscribe((response) => console.log(response));
  }

  requestAppointment(
    doctors: string[],
    appointmentStartTime: Date,
    appointmentEndTime: Date
  ) {
    return this.http
      .post(AppSettings.API_ENDPOINT + '/appointments/create', {
        creator: this.authService.getUserId(),
        doctors: doctors,
        appointmentStartTime: appointmentStartTime,
        appointmentEndTime: appointmentEndTime,
      })
      .subscribe((response) => console.log(response));
  }

  getRequestedAppointments() {
    return this.http
      .get(
        AppSettings.API_ENDPOINT +
          '/appointments/requestedAppointments/' +
          this.authService.getUserId()
      )
      .subscribe((response) => console.log(response));
  }
}
