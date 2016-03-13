(function (){
    'use strict';

    angular.module('guest-post.alerts').directive('alerts', AlertsDirective);

    function AlertsDirective(AlertsModel) {
        var directive = {
            restrict : "E",
            templateUrl : jsFolder("/components/alerts/templates/alerts.template.html"),
            replace : true,
            scope : {},
            controller : 'AlertsController',
            controllerAs : 'vc',
            bindToController : true
        };

        return directive;
    }
})();
