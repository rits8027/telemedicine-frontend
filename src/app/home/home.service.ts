import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private user: User;

  constructor(private http: HttpClient) {}

  getUserDetails(id: string) {
    this.http
      .get(AppSettings.API_ENDPOINT + '/users/profile/' + id)
      .subscribe((response) => console.log(response));
  }
}
