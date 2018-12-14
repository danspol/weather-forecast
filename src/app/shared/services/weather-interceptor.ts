import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    switch (request.method) {

      case 'GET':
        const params = request.params.append('appid', environment.appid);
        return next.handle(request.clone({params}));

      default:
        return next.handle(request);
    }


  }

}
