'use strict';

function WeatherService($http) {

  var getWeatherByZip = function (params) {
    // Object.assign(params, {cnt: 5});

    return $http.get("/data/2.5/forecast/daily", {params: params});
  };

  return {
    getWeatherByZip: getWeatherByZip
  };
}

var shared = angular.module('SharedModule');
shared.factory('WeatherService', ['$http', WeatherService]);