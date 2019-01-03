'use strict';

function WeatherController(weatherService, location) {
  var ctrl = this;

  this.loading = true;
  this.days = [];
  this.city = null;
  this.currentDay = null;

  var searchSuccess = function (data) {
    ctrl.loading = false;
    ctrl.city = data.city;
    ctrl.days = data.list;

    ctrl.currentDay = ctrl.days && ctrl.days.length ? ctrl.days[0] : null;
  };

  if (location.zip) {
    weatherService.getWeatherByZip(location)
      .then(searchSuccess);
  }

  this.selectWeather = function (day) {
    ctrl.currentDay = day;
  };

  this.search = function (zip) {
    ctrl.loading = true;
    weatherService.getWeatherByZip({zip: zip})
      .then(searchSuccess);
  };
}

var weatherModule = angular.module('WeatherModule');

weatherModule.controller('WeatherController', ['WeatherService', 'location', WeatherController]);