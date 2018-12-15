import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IWeatherByLocation} from '../../../services/weather-api';
import {reduce} from 'lodash';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherViewComponent {
  @Input() forecast: IWeatherByLocation;

  constructor() {
  }
}
