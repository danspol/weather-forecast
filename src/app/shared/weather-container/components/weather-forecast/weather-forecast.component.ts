import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IWeatherList} from '../../../services/weather-api';
import * as moment from 'moment';
import {reduce} from 'lodash';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent implements OnChanges {
  @Input() forecasts: IWeatherList;

  days = [];
  groupDays = {};
  previous;

  constructor() {
  }

  getDay(timestamp) {
    return moment(timestamp).format('MMMM DD');
  }

  getHour(timestamp) {
    return moment(timestamp).format('HH:mm');
  }

  isNextDay(timestamp) {
    const day = moment(timestamp).format('DD');

    if (day !== this.previous) {
      this.previous = day;
      return true;
    }

    return false;
  }

  getForecasts(day) {

    return this.groupDays[day] || [];
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.forecasts) {
      const forecasts = changes.forecasts.currentValue;
      this.groupDays = reduce(forecasts.list, (result, value) => {
        const key = moment(value.dt_txt).format('DD');

        if (!result[key]) {
          result[key] = [];
        }

        result[key] = [...result[key], value];

        return result;
      }, {});

      this.days = Object.keys(this.groupDays);
    }
  }
}
