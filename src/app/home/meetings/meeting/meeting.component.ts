import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment.model';
import { HomeService } from '../../home.service';

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

  constructor(private router: Router, private homeService: HomeService) {}

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

  startMeeting(id: string) {
    this.router.navigate([`/meet/${id}`]);
  }

  loadPrescription(id: string) {
    if (!this.isPersonal)
      this.homeService.getPrescriptions(id).subscribe((response) => {
        if (response['data']['prescriptions'].length == 0) {
          // add notification
          this.router.navigate([`/meet/${id}/prescription`]);
        }
      });
  }
}
