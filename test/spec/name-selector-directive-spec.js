'use strict';

describe('cvNameSelector', function () {
	var rootScope;
	var outerName;
	var innerName;
	var button;

	beforeEach(module('CoffeeVendingMachineModule'));

	beforeEach(inject(function ($rootScope, $compile) {
		rootScope = $rootScope;
		rootScope.name = 'Zebra';
		var template = '' +
			'<div>' +
			'  <span class="outerName">{{name}}</span>' +
			'  <div cv-name-selector>' +
			'    <span class="innerName">{{name}}</span>' +
			'    <button ng-click="selectNewName()"></button>' +
			'  </div>' +
			'</div>';
		var compiled = $compile(template)($rootScope);
		outerName = compiled.find('.outerName');
		innerName = compiled.find('.innerName');
		button = compiled.find('button');
		$rootScope.$digest();
	}));

	it('initializes as expected', function () {
		expect(outerName.text()).toEqual('Zebra');
		expect(innerName.text()).toEqual('Zebra');
	});

	it('changes both names when clicking the button', function () {
		button.click();
		expect(outerName.text()).toEqual('Amanda');
		expect(innerName.text()).toEqual('Amanda');
	});
});
