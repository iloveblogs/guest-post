(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);

    function ListAllBlogsController(ListBlogsModel){
        var vc = this;
        vc.vm = ListBlogsModel;

        vc.loadMoreBlogsAndPaginate = loadMoreBlogsAndPaginate();

        function loadMoreBlogsAndPaginate(){
            vc.vm.loadMoreBlogs();
        }

    }
})();
