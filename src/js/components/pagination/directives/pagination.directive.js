(function(){
    'use strict';

    angular.module('guest-post.pagination').directive('pagination', paginationDirective);

    function paginationDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: '/js/components/pagination/templates/pagination.template.html',
            scope: {},
            replace: true
        };
        return directive;
    }

})();
