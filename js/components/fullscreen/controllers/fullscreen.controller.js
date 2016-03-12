(function(){
    "use strict";

    angular.module('guest-post.fullscreen').controller('FullscreenController', FullscreenController);

    FullscreenController.$inject = ['FullscreenModel'];

    function FullscreenController(FullscreenModel){
        var vc = this;
        vc.vm = FullscreenModel;
    }

})();
