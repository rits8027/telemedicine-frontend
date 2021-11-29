import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  appointmentId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.appointmentId = params.id));
  }

  ngOnInit(): void {}
}
