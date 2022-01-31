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
  canStart = false;

  constructor() {}

  ngOnInit(): void {
    const now = new Date().getTime();
    const start = new Date(this.meeting.start).getTime();
    const end = new Date(this.meeting.end).getTime();
    this.canStart = start <= now && end > now;
    this.showDetails = false;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  startMeeting() {
    console.log('meeting started');
  }
}
