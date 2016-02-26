(function() {
    angular.module('guest-post.alerts').controller('AlertsController', AlertsController);

    function AlertsController(AlertsModel) {
        var vc = this;
        vc.vm = AlertsModel;
    };
})();
