'use strict';

var appId = "b6907d289e10d714a6e88b30761fae22";

function InterceptorService() {

  var sessionInjector = {

    response: function(res) {
      //Todo: check http errors from server

      if(res.config.url.indexOf('/data') !== -1) {

        switch (res.config.method) {
          case 'GET': return res.data;
        }
      }

      return res;
    },

    request: function (config) {

      if(config.url.indexOf('/data') !== -1) {

        switch (config.method) {
          case 'GET': config.params.appid = appId; break;
        }
      }

      return config;
    }
  };
  return sessionInjector;
}

var shared = angular.module('SharedModule', []);
shared.factory('InterceptorService', [InterceptorService]);

function SharedModule($httpProvider) {

  $httpProvider.interceptors.push('InterceptorService');
}
shared.config(['$httpProvider', SharedModule]);
