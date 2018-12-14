import {Component, OnInit} from '@angular/core';
import {WeatherApi} from '../services/weather-api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

  loading = true;
  weathers;
  constructor(private weatherApi: WeatherApi,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    const {location} = this.activatedRoute.snapshot.data;

    this.weatherApi.getWeather(location)
      .subscribe((data) => {
        this.loading = false;
        this.weathers = data;


        console.log(data);
      });
  }

}
