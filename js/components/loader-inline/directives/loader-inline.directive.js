(function(){
    'use strict';

    angular.module('guest-post.loader-inline').directive('loaderInline', loaderInlineDirective);

    function loaderInlineDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: jsFolder('/js/components/loader-inline/templates/loader-inline.template.html'),
            scope: {},
            replace: true
        };
        return directive;
    }

})();
