import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {reduce} from 'lodash';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent implements OnChanges {
  @Input() days: string[];
  @Input() selectedDay;
  @Output() onSelectDay = new EventEmitter();

  activeDay;

  constructor() {
  }

  select(datetime) {

    this.activeDay = datetime;
    this.onSelectDay.emit(datetime);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.selectedDay) {
      this.activeDay = changes.selectedDay.currentValue;
    }
  }
}
