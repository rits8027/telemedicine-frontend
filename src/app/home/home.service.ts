import { HttpClient } from '@angular/common/http';
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
    return this.http.get(
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

  savePrescription(value, id: string) {
    return this.http.post(AppSettings.API_ENDPOINT + '/prescriptions/create', {
      appointmentId: id,
      patientDetails: {
        height: value['height'],
        weight: value['weight'],
      },
      result: {
        problem: value['description'],
        diagnosis: value['diagnosis'],
        medicines: value['medicines'],
        tests: value['tests'].split(','),
      },
    });
  }

  getPrescriptions(id: string) {
    return this.http.get(
      AppSettings.API_ENDPOINT + '/appointments/' + id + '/prescriptions'
    );
  }

  setAvailabilityStatus(status: boolean) {
    return this.http.patch(AppSettings.API_ENDPOINT + '/kiosk/makeAvailable', {
      id: this.authService.getUserId(),
      status: status,
    });
  }

  startRoom(doctors: string[]) {
    return this.http.post(AppSettings.API_ENDPOINT + '/appointments/create', {
      creator: this.authService.getUserId(),
      doctors: doctors,
      enabled: true,
      kioskRoom: true,
    });
  }

  getRooms() {
    return this.http.get(AppSettings.API_ENDPOINT + '/kiosk/availableRooms');
  }

  getPatients() {
    return this.http.get(AppSettings.API_ENDPOINT + '/users/all-patients');
  }
}
