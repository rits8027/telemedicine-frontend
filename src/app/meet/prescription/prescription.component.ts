import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent implements OnInit {
  appointmentId: string;
  prescriptionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe((params) => (this.appointmentId = params.id));
    this.prescriptionForm = this.formBuilder.group({
      description: '',
      diagnosis: '',
      tests: '',
      medicines: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    this.homeService
      .getAppointment(this.appointmentId)
      .subscribe((response) => console.log(response));
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
    console.log(this.prescriptionForm.value);
  }
}
