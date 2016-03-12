(function(){
	angular.module('guest-post').controller('indexController', indexController);

    function indexController(){
        var vc = this;
        vc.isAddBlogOpen = false;
        vc.openAddBlogModal = openAddBlogModal;

        function openAddBlogModal(){
            vc.isAddBlogOpen = true;
        }

    }
})();
