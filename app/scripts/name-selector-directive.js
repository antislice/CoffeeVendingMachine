angular
  .module('CoffeeVendingMachineModule')
  .directive('cvNameSelector', function () {
    'use strict';
    return {
      restrict: 'A',
      scope: false, // false is the default
      link: function ($scope) {
        var names = ['Amanda', 'Barbara', 'Christina', 'Diana', 'Edna'];
        var index = 0;
        $scope.selectNewName = function () {
          $scope.name = names[index];
          index++;
          if (index >= names.length) {
            index = 0;
          }
        };
      }
    };
  });