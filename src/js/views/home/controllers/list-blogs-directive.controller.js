(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListBlogsDirectiveController', ListBlogsDirectiveController);

    function ListBlogsDirectiveController(ListBlogsModel, $state){
        var vc = this;
        vc.vm = ListBlogsModel;

        vc.loadMoreBlogsAndPaginate = loadMoreBlogsAndPaginate;

        function loadMoreBlogsAndPaginate(){
            vc.vm.loadMoreBlogs();
            var nextPageNumber = vc.vm.pageNumber;
            $state.go('home-pagination', {pageNumber: vc.vm.pageNumber}, {notify: false});
        }

    }
})();
