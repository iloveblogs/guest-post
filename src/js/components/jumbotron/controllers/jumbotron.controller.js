(function(){
    angular.module('guest-post.jumbotron').controller('JumbotronController', JumbotronController);

    function JumbotronController($state){
        var vc = this;
        vc.searchByInput = searchByInput;

        function searchByInput(){
            $state.go('home-search', {'searchValue': vc.searchValue});
        }
    }
})();
