(function(){
    'use strict';

    angular.module('guest-post.alerts').factory('AlertsModel', AlertsModel);

    AlertsModel.$inject = ["$timeout"];

    function AlertsModel($timeout) {
        var model = {
            alerts : [],
            pushAlert : pushAlert,
            closeAlert : closeAlert
        };

        return model;

        function pushAlert(alert, time) {
            var time = time || 3000;

            model.alerts.push(alert);

            $timeout(function () {
                model.closeAlert(alert);
            }, time);
        }

        function closeAlert(alert) {
            var index = model.alerts.indexOf(alert);
            if(index > -1) {
                model.alerts.splice(index, 1);
            }
        }
    }
})();
