import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService.getMeetings().subscribe((response) => {
      response['data']['personalAppointments'].forEach((appointment) => {
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
    console.log(this.kioskRooms[i]);
    if (
      this.kioskRooms[i].attendees.length >
      this.kioskRooms[i].prescriptionLinks.length
    ) {
      this.router.navigate([`/meet/${this.kioskRooms[i]['_id']}/prescription`]);
    }
    // TODO: show or get prescription
    // console.log(this.kioskRooms[i]);
  }
}
