(function(){
	'use strict';

	angular.module('guest-post.views.novo').config(configNovo);

    configNovo.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configNovo($stateProvider, $urlRouterProvider){

	 	var stateNovo = {
	 		url: '/guest-post/novo',
	 		template: '<add-new-blog></add-new-blog>',
            controller: 'AddNewBlogPageController as vc'
	 	};

        $stateProvider.state('novo', stateNovo);
	}

})();
