(function(){
    "use strict";

    angular.module('guest-post.navigation-header').directive('navigationHeader', NavigationHeaderDirective);

    NavigationHeaderDirective.$inject = [];

    function NavigationHeaderDirective(){
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {},
            controller: 'NavigationHeaderController',
            controllerAs: 'vc',
            bindToController: true,
            templateUrl: '/js/components/navigation-header/templates/navigation-header.template.html',
        };
        return directive;
    }

})();
