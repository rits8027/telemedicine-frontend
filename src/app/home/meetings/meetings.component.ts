import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
})
export class MeetingsComponent implements OnInit {
  appointments: Appointment[] = [
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://png.pngitem.com/pimgs/s/80-800373_it-benefits-per-users-default-profile-picture-green.png',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://png.pngitem.com/pimgs/s/80-800373_it-benefits-per-users-default-profile-picture-green.png',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg',
      '10:00',
      '10:30',
      false
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://png.pngitem.com/pimgs/s/80-800373_it-benefits-per-users-default-profile-picture-green.png',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://png.pngitem.com/pimgs/s/80-800373_it-benefits-per-users-default-profile-picture-green.png',
      '10:00',
      '10:30',
      false
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
