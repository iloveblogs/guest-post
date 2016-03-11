(function(){
    'use strict';

    angular.module('guest-post.fullscreen').directive('fullscreen', fullscreenDirective);

    function fullscreenDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: '/js/components/fullscreen/templates/fullscreen.template.html',
            scope: {},
            replace: true,
            transclude: true,
            controller: 'FullscreenController as vc'
        };
        return directive;
    }

})();
