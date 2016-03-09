(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListBlogsDirectiveController', ListBlogsDirectiveController);

    function ListBlogsDirectiveController(ListBlogsModel, $location){
        var vc = this;
        vc.vm = ListBlogsModel;

        vc.loadMoreBlogsAndPaginate = loadMoreBlogsAndPaginate;

        function loadMoreBlogsAndPaginate(){
            vc.vm.loadMoreBlogs();
            var nextPageNumber = vc.vm.pageNumber + 1;
            var nextPagePath = ['pagina', nextPageNumber].join('/');
            $location.path(nextPagePath);
        }

    }
})();
