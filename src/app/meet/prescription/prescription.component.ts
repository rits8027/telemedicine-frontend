import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit, OnDestroy {
  patients = [];
  isLoading = true;
  appointmentId: string;
  prescriptionForm: FormGroup;
  private userListener: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.route.params.subscribe((params) => (this.appointmentId = params.id));
    this.prescriptionForm = this.formBuilder.group({
      patient: '',
      description: '',
      diagnosis: '',
      tests: '',
      medicines: this.formBuilder.array([]),
      height: '',
      weight: '',
    });
  }

  ngOnInit(): void {
    if (this.authService.getIsUserFetched()) this.setStatus();
    this.userListener = this.authService
      .getAuthStatusListener()
      .subscribe((userFetched) => userFetched && this.setStatus());
    this.homeService.getAppointment(this.appointmentId).subscribe(
      (response) => {
        this.patients = response['data']['attendees'];
      },
      (error) => {
        // show error
        this.router.navigate(['/home']);
      }
    );
  }

  ngOnDestroy(): void {
    this.userListener.unsubscribe();
  }

  setStatus() {
    this.isLoading = false;
    if (!this.authService.getIsDoctor()) this.router.navigate(['/home']);
  }

  medicines(): FormArray {
    return this.prescriptionForm.get('medicines') as FormArray;
  }

  newMedicine(): FormGroup {
    return this.formBuilder.group({
      medicine: '',
      dosage: '',
    });
  }

  addMedicine() {
    this.medicines().push(this.newMedicine());
  }

  removeMedicine(i: number) {
    this.medicines().removeAt(i);
  }

  onSubmitPrescription() {
    if (this.prescriptionForm.invalid) return;
    this.homeService
      .savePrescription(this.prescriptionForm.value, this.appointmentId)
      .subscribe((response) => {
        // display notification
        this.router.navigate(['/home']);
      });
  }
}
