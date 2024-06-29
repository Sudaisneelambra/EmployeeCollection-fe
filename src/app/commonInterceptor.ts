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
    const token = localStorage.getItem('token')    
     request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })

    setTimeout(() => {
        this.commonService.loadingBooleanBe.next(true);   
    });

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.expiry) {
            alert('JWT Expired. Please login again');
            localStorage.clear()
            this.router.navigate(['/']);
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.commonService.loadingBooleanBe.next(false)
        if (error.status === 404) {
            this.commonService.errorBooleanBe.next(true);
            this.commonService.errorMessageBe.next(error.error.message);
        } else if (error.status === 409) {
            this.commonService.errorBooleanBe.next(true);
            this.commonService.errorMessageBe.next(error.error.message);
        } else{
            this.commonService.errorBooleanBe.next(true);
            this.commonService.errorMessageBe.next('un wanted error please try again');
        }
        return throwError(error);
      })
    );
  }
}
