import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

import { Router } from '@angular/router';

@Injectable()

export class MainHttpInterceptor implements HttpInterceptor {
  private logoutAlerted;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.logoutAlerted = false;
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customRequest = httpRequest.clone();

    if (this.router.url === '/' || this.router.url === '/home') {
      // animacion de apertura de datos
      // this.spinner.hide();
    } else {
      // animacion de apertura de datos
      // this.spinner.show();
    }

    return next.handle(customRequest);
  }
}
