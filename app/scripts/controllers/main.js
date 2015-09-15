'use strict';

/**
 * @ngdoc function
 * @name outcomesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outcomesApp
 */
angular.module('outcomesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
