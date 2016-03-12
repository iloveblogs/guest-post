(function(){

    'use strict';

    angular.module('guest-post.views.home').directive('listAllBlogs', listAllBlogs);

    function listAllBlogs(){
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/js/views/home/templates/home-list.template.html',
            controller: 'ListBlogsDirectiveController as vc',
            bindToController: true
        };
        return directive;
    }

})();
