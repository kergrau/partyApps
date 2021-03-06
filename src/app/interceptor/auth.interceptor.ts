import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { AuthService } from '../web-services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          if (this.authService.isAuthenticated()) {
            this.authService.logout();
          }
          this.router.navigate(['/login']);
        }

        if (error.status === 403) {
          alert('Denied Access');
        }
        return throwError(error);
      })
    );
  }
}
