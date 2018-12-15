import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GeoLocationResolve} from './shared/guards/geo-location';
import {WeatherApi} from './shared/services/weather-api';
import {WeatherInterceptor} from './shared/services/weather-interceptor';
import {WeatherContainerComponent} from './shared/weather-container/weather-container.component';
import {WeatherForecastComponent} from './shared/weather-container/components/weather-forecast/weather-forecast.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {WeatherViewComponent} from './shared/weather-container/components/weather-view/weather-view.component';
import {MomentFormatPipes} from './shared/pipes/pipes';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherForecastComponent,
    WeatherViewComponent,
    NotFoundComponent,
    MomentFormatPipes,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GeoLocationResolve,
    WeatherApi,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
