import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type':  'application/json',
        'Accept': 'application/json'
    };
    const modifiedRequest = req.clone({setHeaders: headers});
    return next.handle(modifiedRequest);
  }
}