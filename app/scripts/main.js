angular
  .module('CoffeeVendingMachineModule', [])
  .controller('CoffeeVendingMachineController', function ($scope) {
    "use strict";
    $scope.categories = [
      {
        name: 'Kind',
        options: [
          {
            name: 'Regular',
            price: 0.00
          }, {
            name: 'Decaf',
            price: 0.00
          }
        ]
      }, {
        name: 'Size',
        options: [
          {
            name: 'Small',
            price: 1.00
          }, {
            name: 'Medium',
            price: 1.50
          }, {
            name: 'Large',
            price: 2.00
          }
        ]
      }, {
        name: 'Creamer',
        options: [
          {
            name: 'None',
            price: 0.00
          }, {
            name: 'Milk',
            price: 0.46
          }, {
            name: 'Half-n-half',
            price: 0.50
          }
        ]
      }, {
        name: 'Sweetener',
        options: [
          {
            name: 'None',
            price: 0.00
          }, {
            name: 'Sugar',
            price: 0.15
          }, {
            name: 'Splenda',
            price: 0.33
          }
        ]
      }
    ];
  });