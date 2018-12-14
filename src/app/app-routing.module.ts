import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeoLocationResolve} from './shared/guards/geo-location';
import {WeatherContainerComponent} from './shared/weather-container/weather-container.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  resolve: {
    location: GeoLocationResolve
  },
  component: WeatherContainerComponent,
}, {
  path: '**',
  component: NotFoundComponent,
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GeoLocationResolve]
})
export class AppRoutingModule {
}
