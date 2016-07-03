'use strict';

angular.module('angYoApp.auth', ['angYoApp.constants', 'angYoApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
