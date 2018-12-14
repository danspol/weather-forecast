import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IWeatherList} from '../../../services/weather-api';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent {
  @Input() forecasts: IWeatherList;

  currentDay;
  constructor() {
  }

  isNextDay(timestamp) {
      const day = new Date(timestamp);
  }
}
