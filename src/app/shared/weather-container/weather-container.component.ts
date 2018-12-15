import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {WeatherApi} from '../services/weather-api';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'moment';
import {get, head, keys, reduce} from 'lodash';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WeatherContainerComponent implements OnInit {

  loading = true;
  groupDays;
  days;
  selectedHours;
  selectedDay;

  constructor(private weatherApi: WeatherApi,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    const {location} = this.activatedRoute.snapshot.data;

    this.weatherApi.getWeather(location)
      .subscribe((data) => {
        this.loading = false;

        const groupDays = reduce(data.list, (result, value) => {
          const key = moment(value.dt_txt).format('YYYYMMDD');

          if (!result[key]) {
            result[key] = [];
          }

          result[key] = [...result[key], value];

          return result;
        }, {});

        this.groupDays = groupDays;
        this.days = keys(groupDays);

        this.selectedDay = head(this.days);
        this.selectedHours = this.groupDays[this.selectedDay];
      });
  }

  select(day) {
    this.selectedHours = this.groupDays[day];
  }
}
