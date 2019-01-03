'use strict';

function WeatherModule($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'components/weather/weather.html',
    controller: 'WeatherController',
    controllerAs: '$ctrl',
    resolve: {
      location: ['$q', function ($q) {
        var zip = '60661,us',
          deferred = $q.defer();

        var onSuccess = function (position) {
          deferred.resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        };

        var onError = function (error) {
          deferred.resolve({zip: zip});
        };

        var notSupport = function (data) {
          deferred.resolve({zip: zip});
        };

        if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } else {
          return deferred.resolve({zip: zip});
        }

        return deferred.promise;
      }]
    }
  });
}

var weatherModule = angular.module('WeatherModule', [
  'ngRoute',
  'SharedModule'
]);

weatherModule.config(['$routeProvider', WeatherModule]);