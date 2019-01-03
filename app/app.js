'use strict';

function MyAppModule($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/weather'
  });
}

angular.module('myApp', [
  'ngRoute',
  'WeatherModule',
  'SharedModule',
]).config(['$locationProvider', '$routeProvider', MyAppModule]);
