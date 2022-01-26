import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  isLoading = true;
  personalAppointments: Appointment[] = [];
  appointments: Appointment[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getMeetings().subscribe((response) => {
      response['data']['personalAppointments'].forEach((appointment) => {
        this.personalAppointments.push(
          new Appointment(
            appointment['_id'],
            appointment['creator'],
            appointment['doctors'][0],
            appointment['appointmentStartTime'],
            appointment['appointmentEndTime']
          )
        );
      });
      response['data']['appointments'].forEach((appointment) => {
        this.appointments.push(
          new Appointment(
            appointment['_id'],
            appointment['creator'],
            appointment['doctors'][0],
            appointment['appointmentStartTime'],
            appointment['appointmentEndTime']
          )
        );
      });
      this.isLoading = false;
    });
  }
}
