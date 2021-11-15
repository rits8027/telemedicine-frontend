import { Injectable } from '@angular/core';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private user: User;

  constructor() {}

  getUserDetails() {}
}
