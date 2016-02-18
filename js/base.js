
if(!window.GUEST){
	var GUEST = {};
}

if(!GUEST.angularDependencies){
	GUEST.angularDependencies = [];
}


(function(){
	'use strict';

	var angularDependencies = [];
	
	angular.module('guest-post', GUEST.angularDependencies);	

	angular.module("guest-post").config(guestConfig);
	angular.module("guest-post").run(guestRun);

	function guestConfig($interpolateProvider, $httpProvider, $locationProvider){
	    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';  
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$locationProvider.html5Mode(true);		
	}

	function guestRun(){}

})();

