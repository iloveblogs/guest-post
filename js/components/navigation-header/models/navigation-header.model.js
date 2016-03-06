(function(){
    "use strict";

    angular.module('guest-post.navigation-header').factory('NavigationHeaderModel', NavigationHeaderModel);

    function NavigationHeaderModel(){

        var model = {
            isMenuFixed: false,
            fixMenu: fixMenu,
            unFixMenu: unFixMenu
        };

        function fixMenu(){
            model.isMenuFixed = true;
        }

        function unFixMenu(){
            model.isMenuFixed = false;
        }

        return model;
    }
})();
