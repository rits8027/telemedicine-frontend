import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getRequestedAppointments();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.homeService.requestAppointment(
      ['61953a2bae0d66eb1e68e9ff'],
      form.value.startTime,
      form.value.endTime
    );
  }
}
