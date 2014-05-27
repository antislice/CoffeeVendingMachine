angular
	.module('CoffeeVendingMachineController', function ($scope) {
		'use strict';
		$scope.categories = [
			{
				name: 'Kind',
				options: [
					{
						name: 'Regular',
						price: 0.00
					},
					{
						name: 'Decaf',
						price: 0.00
					}
				]
			},
			{
				name: 'Size',
				options: [
					{
						name: 'Small',
						price: 1.00
					},
					{
						name: 'Medium',
						price: 2.00
					},
					{
						name: 'Large',
						price: 3.00
					}
				]
			}
		];

		$scope.selections = {};

		$scope.price = 0;

		$scope.calculatePrice = function() {
			$scope.price = _.reduce($scope.selections, function (runningTotal, optionName, categoryName) {
				var category = _.findWhere($scope.categories, {name: categoryName});
				var choice = _.findWhere(category.options, {name: optionName});
				return runningTotal + choice.price;
			}, 0);
		};
	});