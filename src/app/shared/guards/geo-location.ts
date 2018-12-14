import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class GeoLocationResolve implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const location = new Observable((observer) => {
      const zip = '60661,us';

      const onSuccess = (position) => {
        observer.next({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });

        observer.complete();
      };

      const onError = (error) => {
        observer.next({zip});

        observer.complete();
      };

      const notSupport = (data) => {
        observer.next(data);

        observer.complete();
      };

      if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        notSupport({zip});
      }

    });

    return location;
  }
}
