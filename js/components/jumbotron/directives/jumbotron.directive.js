(function(){
    'use strict';

    angular.module('guest-post.jumbotron').directive('jumbotron', jumbotronDirective);

    function jumbotronDirective(){
        var directive = {
            restrict: 'E',
            templateUrl: '/js/components/jumbotron/templates/jumbotron.template.html',
            scope: {},
            replace: true
        };
        return directive;
    }

})();
