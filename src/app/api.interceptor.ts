import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('pythonanywhere') < 0) {
      const authToken = this.authService.getToken();
      const authRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken,
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
