(function(){

	'use strict';

	angular.module('guest-post.views.novo').directive('addNewBlog', addNewBlogDirective);

	function addNewBlogDirective(){
		var directive = {
			restrict: 'E',
			replace: true,
			templateUrl: jsFolder('views/novo/templates/add-new-blog.template.html'),
			controller: 'AddNewBlogDirectiveController as vc',
			bindToController: true
		};
		return directive;
	}

})();
