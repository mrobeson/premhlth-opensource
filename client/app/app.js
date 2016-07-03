'use strict';

angular.module('angYoApp', ['angYoApp.auth', 'angYoApp.admin', 'angYoApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
