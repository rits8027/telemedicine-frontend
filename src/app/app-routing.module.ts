import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { RegisterComponent } from './auth/register/register.component';
import { HelpComponent } from './home/help/help.component';
import { RequestComponent } from './home/request/request.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './home/home.guard';
import { MeetingsComponent } from './home/meetings/meetings.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SettingsComponent } from './home/settings/settings.component';
import { MeetComponent } from './meet/meet.component';
import { PrescriptionComponent } from './meet/prescription/prescription.component';
import { DisableRoomComponent } from './global/disable-room/disable-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'disable/:appointmentId',
    component: DisableRoomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'meet/:id',
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', component: MeetComponent },
      { path: 'prescription', component: PrescriptionComponent },
    ],
  },
  {
    path: 'auth',
    canActivate: [HomeGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'otp-verification', component: OtpVerificationComponent },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'meetings', component: MeetingsComponent },
      { path: 'request', component: RequestComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'feedback', component: HelpComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, HomeGuard],
})
export class AppRoutingModule {}
