'use strict';

function WeatherListComponent() {

  var ctrl = this;

  this.getDay = function (date) {
    return (new Date(date)).getDate();
  };

  this.select = function (day, key) {
    ctrl.onSelect({value: day});
  };
}

var shared = angular.module('SharedModule');
shared.component('weatherList', {
  templateUrl: 'shared/weather-list/weather-list.html',
  controller: [WeatherListComponent],
  controllerAs: "$ctrl",
  bindings: {
    days: "<",
    onSelect: "&"
  }
});