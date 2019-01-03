'use strict';

function WeatherDetailsComponent() {
  var ctrl = this;
}

var shared = angular.module('SharedModule');
shared.component('weatherDetails', {
  templateUrl: 'shared/weather-details/weather-details.html',
  controller: [WeatherDetailsComponent],
  controllerAs: '$ctrl',
  bindings: {
    day: '<'
  }
});