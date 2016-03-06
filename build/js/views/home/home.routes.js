(function(){
	'use strict';

	angular.module('guest-post.views.home').config(configHome);

	function configHome($stateProvider, $urlRouterProvider){

	 	var stateHome = {
	 		url: '/',
	 		template: '<list-all-blogs></list-all-blogs>',
	 	};

	 	$stateProvider.state('home', stateHome);
	}

})();
