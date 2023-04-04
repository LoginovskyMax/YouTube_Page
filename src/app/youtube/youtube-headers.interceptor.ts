import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class YoutubeHeadersInterceptor implements HttpInterceptor {
  host = 'https://www.googleapis.com/youtube/v3/'

  apiKey = '?key=AIzaSyBApfjAX9A8LN7R7t9LrQ3uEYuZjx4k7AY'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newStr = request.url.slice(0, 6) + this.apiKey + request.url.slice(6, request.url.length);
    const newURL = this.host + newStr;
    const newRequest = request.clone({ url: newURL });
    return next.handle(newRequest)
      .pipe(
        catchError((err) => {
          const error = err.statusText;
          return throwError(() => error);
        }),
      );
  }
}
