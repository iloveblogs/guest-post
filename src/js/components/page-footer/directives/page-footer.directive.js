(function(){
    'use strict';

    angular.module('guest-post.page-footer').directive('pageFooter', PageFooterDirective);

    function PageFooterDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: '/js/components/page-footer/templates/page-footer.template.html',
            scope: {},
            replace: true
        };
        return directive;
    }

})();
