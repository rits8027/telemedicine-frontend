import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './global/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MeetingsComponent } from './home/meetings/meetings.component';
import { ChatComponent } from './home/chat/chat.component';
import { SettingsComponent } from './home/settings/settings.component';
import { HelpComponent } from './help/help.component';
import { MeetingComponent } from './home/meetings/meeting/meeting.component';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { DoctorComponent } from './home/profile/doctor/doctor.component';
import { PatientComponent } from './home/profile/patient/patient.component';
import { ProfileDetailsComponent } from './home/profile/profile-details/profile-details.component';
import { MeetComponent } from './meet/meet.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OtpVerificationComponent,
    ProfileComponent,
    MeetingsComponent,
    ChatComponent,
    SettingsComponent,
    HelpComponent,
    MeetingComponent,
    ForgotPasswordComponent,
    DoctorComponent,
    PatientComponent,
    ProfileDetailsComponent,
    MeetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
