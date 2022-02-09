import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  rooms = [];
  user: User;
  patients = [];
  isLoading = true;
  isKiosk: boolean;
  isDoctor: boolean;
  ageFromDob: number;
  loadingResult = false;
  results: string[] = [];
  private userListener: Subscription;

  constructor(
    private authService: AuthService,
    private homeService: HomeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.getIsUserFetched()) this.setStatus();
    this.userListener = this.authService
      .getAuthStatusListener()
      .subscribe((userFetched) => userFetched && this.setStatus());
  }

  setStatus() {
    this.isDoctor = this.authService.getIsDoctor();
    this.isKiosk = this.authService.getIsKiosk();
    this.user = this.authService.getUser();
    if (!this.isDoctor) {
      this.ageFromDob = Math.round(
        (Date.now() - +new Date(this.user.dob)) / 31557600000
      );
      if (this.isKiosk) {
        this.homeService.getRooms().subscribe((response) => {
          this.rooms = response['data'];
          this.homeService.getPatients().subscribe((response) => {
            this.patients = response['data'];
            this.isLoading = false;
          });
        });
      } else this.isLoading = false;
    } else this.isLoading = false;
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
    this.loadingResult = true;
    this.homeService.setAvailabilityStatus(true).subscribe((_) => {
      if (this.isDoctor)
        this.homeService.startRoom([this.user['_id']]).subscribe((response) => {
          this.loadingResult = false;
          this.router.navigate([
            '/meet/' + response['data']['appointment']['_id'],
          ]);
        });
    });
  }

  joinRoom(selectRoom) {
    if (selectRoom.invalid) return;
    this.router.navigate(['/meet/' + selectRoom.value]);
  }

  addToRoom(selectRoom, selectPatient) {
    if (selectRoom.invalid || selectPatient.invalid) return;
    this.homeService
      .addPatientToRoom(selectRoom.value, selectPatient.value)
      .subscribe((response) => {
        selectRoom.reset();
        selectPatient.reset();
      });
  }
}
