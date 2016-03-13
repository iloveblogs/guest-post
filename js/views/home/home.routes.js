(function(){
	'use strict';

	angular.module('guest-post.views.home').config(configHome);

    configHome.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configHome($stateProvider, $urlRouterProvider){

	 	var stateHome = {
	 		url: '/guest-post/',
	 		template: '<list-all-blogs></list-all-blogs>',
            controller: 'ListBlogsPageController as vc'
	 	};

        var stateHomePagination = {
            url: '/guest-post/pagina/{pageNumber:[0-9]{1,}}',
            template: '<list-all-blogs></list-all-blogs>',
            controller: 'ListBlogsPageController as vc'
        };

        $stateProvider.state('home', stateHome);
        $stateProvider.state('home-pagination', stateHomePagination);

	}

})();
