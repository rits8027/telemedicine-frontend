import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { RegisterComponent } from './auth/register/register.component';
import { HelpComponent } from './help/help.component';
import { ChatComponent } from './home/chat/chat.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './home/meetings/meetings.component';
import { ProfileComponent } from './home/profile/profile.component';
import { SettingsComponent } from './home/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'otp-verification', component: OtpVerificationComponent },
  {
    path: 'auth',
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
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'meetings', component: MeetingsComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },
    ],
  },
  { path: '*', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
