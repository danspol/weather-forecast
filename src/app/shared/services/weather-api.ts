import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

interface IWeatherSys {
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface IWeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

interface IWeatherCloud {
  all: number;
}

interface IWeatherWid {
  speed: number;
  deg: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWeatherCoord {
  lon: number;
  lat: number;
}

export interface IWeatherByLocation {
  coord: IWeatherCoord;
  weather: IWeather[];
  base: string;
  main: IWeatherMain;
  wind: IWeatherWid;
  clouds: IWeatherCloud;
  dt: number;
  sys: IWeatherSys;
  id: number;
  name: string;
  cod: number;
  dt_txt: string;
}

interface IWeatherCity {
  name: string;
  coord: IWeatherCoord;
  country: string;
}

export interface IWeatherList {
  cod: number;
  message: string;
  cnt: number;
  list: IWeatherByLocation[];
  city: IWeatherCity;
}

interface ISearchQuery {
  lat?: number;
  lon?: number;
  zip?: string;
}

@Injectable()
export class WeatherApi {

  constructor(private http: HttpClient) {
  }

  getWeather(query: ISearchQuery): Observable<IWeatherByLocation | IWeatherList> {
    let params = new HttpParams();

    const keys = Object.keys(query);

    keys.map((key) => {
      params = params.set(key, query[key]);
    });

    return this.http.get('/api/2.5/forecast', {params}) as Observable<IWeatherByLocation | IWeatherList>;
  }
}
