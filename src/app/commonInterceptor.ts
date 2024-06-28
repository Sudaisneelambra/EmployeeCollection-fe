// jwt.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor(private router: Router, private commonService: CommonService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const one = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `bearer${one}`,
      },
    });

    this.commonService.loadingBooleanBe.next(true);

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        this.commonService.loadingBooleanBe.next(false);
        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            this.commonService.successBooleanBe.next(true);
            this.commonService.successMessageBe.next(event.body.message);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
            this.commonService.errorBooleanBe.next(true);
            this.commonService.errorMessageBe.next(error.error.message);
        } else if (error.status === 409) {
            this.commonService.errorBooleanBe.next(true);
            this.commonService.errorMessageBe.next(error.error.message);
        }
        return throwError(error);
      })
    );
  }
}
