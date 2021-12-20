import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  isLoading = true;
  doctors = [];
  requests = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getRequestedAppointments().subscribe((response) => {
      this.requests = response['data']['list'];
      this.isLoading = false;
    });
    this.homeService.getDoctors().subscribe((response) => {
      response['data']['doctors'].forEach((doctor) =>
        this.doctors.push(doctor)
      );
      this.isLoading = false;
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.homeService
      .requestAppointment(
        form.value.selected.map((doc) => doc._id),
        form.value.startTime,
        form.value.endTime
      )
      .subscribe((_) => form.resetForm());
  }

  acceptAppointment(index: number) {
    this.requests.splice(index, 1);
  }
}
