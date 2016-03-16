(function(){
    "use strict";

    angular.module('guest-post.navigation-header').controller('NavigationHeaderController', NavigationHeaderController);

    NavigationHeaderController.$inject = ['NavigationHeaderModel', '$state'];

    function NavigationHeaderController(NavigationHeaderModel, $state){
        var vc = this;
        vc.vm = NavigationHeaderModel;

        vc.searchByInput = searchByInput;

        function searchByInput(){
            $state.go('home-search', {'searchValue': vc.searchValue});
        }
    }

})();
