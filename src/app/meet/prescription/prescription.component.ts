import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  appointmentId: string;

  constructor(private route: ActivatedRoute, private homeService: HomeService) {
    this.route.params.subscribe((params) => (this.appointmentId = params.id));
  }

  ngOnInit(): void {
    this.homeService
      .getAppointment(this.appointmentId)
      .subscribe((response) => console.log(response));
  }

  onSubmitPrescription(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);
  }
}
