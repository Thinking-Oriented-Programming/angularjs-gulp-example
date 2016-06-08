/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */

require('angular-route');
require('../dist/templateCachePartials');

angular.module('todomvc', ['ngRoute','todoPartials'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: '/todomvc/todomvc-index.html',
			resolve: {
				store: ['todoStorage', function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage;
				}]
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});

require('./todomvc/todoCtrl');
require('./todomvc/todoStorage');
require('./todomvc/todoFocus');
require('./todomvc/todoEscape');
require('./todomvc/footer');
