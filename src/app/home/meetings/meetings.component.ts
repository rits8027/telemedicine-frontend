import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';
import { KioskRoom } from 'src/app/Model/kioskRoom.model';
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
  kioskRooms: KioskRoom[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getMeetings().subscribe((response) => {
      response['data']['personalAppointments'].forEach((appointment) => {
        console.log(appointment);
        this.personalAppointments.push(
          new Appointment(
            appointment['_id'],
            appointment['creator'],
            appointment['doctors'][0],
            appointment['appointmentStartTime'],
            appointment['appointmentEndTime'],
            appointment['attendees'],
            appointment['prescriptionLinks']
          )
        );
      });
      response['data']['appointments'].forEach((appointment) => {
        console.log(appointment);
        this.appointments.push(
          new Appointment(
            appointment['_id'],
            appointment['creator'],
            appointment['doctors'][0],
            appointment['appointmentStartTime'],
            appointment['appointmentEndTime'],
            appointment['attendees'],
            appointment['prescriptionLinks']
          )
        );
      });
      this.homeService.getKioskRoom().subscribe((response) => {
        this.kioskRooms = response['data'];
        this.isLoading = false;
      });
    });
  }

  showPrescription(i: number) {
    // TODO: show or get prescription
    // console.log(this.kioskRooms[i]);
  }
}
