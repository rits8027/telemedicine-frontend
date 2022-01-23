import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  @Input() meeting: Appointment;
  @Input() isPersonal: boolean;
  showDetails: boolean;

  constructor() {}

  ngOnInit(): void {
    this.showDetails = false;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
