(function(){
    "use strict";

    angular.module('guest-post.navigation-header').controller('NavigationHeaderController', NavigationHeaderController);

    NavigationHeaderController.$inject = ['NavigationHeaderModel'];

    function NavigationHeaderController(NavigationHeaderModel){
        var vc = this;
        vc.vm = NavigationHeaderModel;
    }

})();
