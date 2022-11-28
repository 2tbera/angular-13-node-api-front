import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
  HttpEvent
} from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  private isRefreshing: boolean = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  intercept(req: any, next: any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `${this.cookieService.get("accessToken")}`,
      },
    });
    // @ts-ignore
    return next.handle(tokenizeReq).pipe(catchError((error: Observable<HttpEvent<any>> | undefined) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(req, next);
      } else if (error instanceof HttpErrorResponse && error.status === 403) {
        this.router.navigate(['/exception', 'access-denied']);
      } else {
        return throwError(error)
      }
    }));
  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.http.get<any>(`http://localhost:3000/auth/refresh-token`, {
        headers:
          {refreshToken: this.cookieService.get("refreshToken")}
      }).pipe(
        tap((tokens) => {
          this.storeJwtToken(tokens.accessToken, tokens.refreshToken);
        }),
        catchError(error => {
          this.cookieService.delete('accessToken')
          this.cookieService.delete('refreshToken')
          this.router.navigate(['auth'])
          return throwError(error)
        }),
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.accessToken);
          return next.handle(this.addToken(request, token.accessToken));
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

  private storeJwtToken(accessToken: string, refreshToken: string) {
    this.cookieService.set('accessToken', accessToken);
    this.cookieService.set('refreshToken', refreshToken);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'authorization': `${token}`
      }
    });
  }

}
