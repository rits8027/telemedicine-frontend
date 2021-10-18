import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment.model';

enum ListingType {
  Day,
  Week,
  Month
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  listingType: ListingType;
  appointments: Appointment[] = [
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      false
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      true
    ),
    new Appointment(
      '123',
      'Shouvit Pradhan',
      'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
      '10:00',
      '10:30',
      false
    ),
  ];

  constructor() {}

  ngOnInit(): void {
    this.setListingType(ListingType.Day);
  }

  setListingType(listingType: ListingType) {
    this.listingType = listingType;
  }

  public get ListingType(): typeof ListingType {
    return ListingType; 
  }
}
