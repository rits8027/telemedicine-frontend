import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { AuthService } from '../auth/auth.service';
import { of } from 'rxjs';

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
    return this.http.post<{ result: string }>(AppSettings.CHATBOT, {
      Name: name,
      Age: age,
      Weight: weight,
      'Blood Pressure': bp,
      message: message,
    });
  }

  requestAppointment(
    doctors: string[],
    appointmentStartTime: Date,
    appointmentEndTime: Date
  ) {
    return this.http.post(AppSettings.API_ENDPOINT + '/appointments/create', {
      creator: this.authService.getUserId(),
      doctors: doctors,
      appointmentStartTime: appointmentStartTime,
      appointmentEndTime: appointmentEndTime,
    });
  }

  getRequestedAppointments() {
    return !this.authService.getIsDoctor()
      ? of(null)
      : this.http.get(
          AppSettings.API_ENDPOINT +
            '/appointments/requestedAppointments/' +
            this.authService.getUserId()
        );
  }

  getDoctors() {
    return this.http.get(AppSettings.API_ENDPOINT + '/users/all-doctors');
  }

  getMeetings() {
    return this.http.get(
      AppSettings.API_ENDPOINT +
        '/appointments/createdAppointments/' +
        this.authService.getUserId()
    );
  }

  acceptAppointment(id: string) {
    return this.http.post(AppSettings.API_ENDPOINT + '/appointments/accept', {
      appointment_id: id,
      user_id: this.authService.getUserId(),
    });
  }

  getAppointment(id: string) {
    return this.http.get(AppSettings.API_ENDPOINT + '/appointments/' + id);
  }
}
