import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { Appointment } from 'src/app/Model/appointment.model';
import { HomeService } from '../home.service';

enum ListingType {
  Day,
  Week,
  Month,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  isLoading = true;
  isDoctor: boolean;
  results: string[] = [];
  loadingResult = false;
  listingType: ListingType;
  private userListener: Subscription;

  public get ListingType(): typeof ListingType {
    return ListingType;
  }

  constructor(
    private authService: AuthService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.setListingType(ListingType.Day);
    if (this.authService.getIsUserFetched()) this.setStatus();
    this.userListener = this.authService
      .getAuthStatusListener()
      .subscribe((userFetched) => userFetched && this.setStatus());
  }

  setListingType(listingType: ListingType) {
    this.listingType = listingType;
  }

  setStatus() {
    this.isLoading = false;
    this.isDoctor = this.authService.getIsDoctor();
    this.user = this.authService.getUser();
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe();
  }

  query(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.loadingResult = true;
    this.homeService
      .getChatbotResult(
        this.user.name,
        form.value.age + ' yrs',
        form.value.weight + 'Kg',
        form.value.bp,
        form.value.symptoms.split(',').map((symptom) => symptom.trim())
      )
      .subscribe((response) => {
        this.results.push(response.result);
        form.resetForm();
        this.loadingResult = false;
      });
  }

  startRoom() {
    console.log('room started');
  }
}
