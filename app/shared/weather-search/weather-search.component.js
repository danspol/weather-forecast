'use strict';

function WeatherSearchComponent() {
  var ctrl = this;

  this.zip = '';

  this.submit = function () {
    ctrl.onSearch({value: ctrl.zip});
  };
}

var shared = angular.module('SharedModule');
shared.component('weatherSearch', {
  templateUrl: 'shared/weather-search/weather-search.html',
  controller: [WeatherSearchComponent],
  bindings: {
    onSearch: '&'
  }
});