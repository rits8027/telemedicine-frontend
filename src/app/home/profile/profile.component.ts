import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  appointments: Appointment[] = [
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      false
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'dksfj.com',
      '10:00',
      '10:30',
      false
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
