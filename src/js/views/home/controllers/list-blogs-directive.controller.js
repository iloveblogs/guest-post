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
            var stateNameToGo = vc.vm.pageType === 'search' ? 'home-search-pagination' : 'home-pagination';
            var stateParams = {
                pageNumber: vc.vm.pageNumber,
                searchValue: vc.vm.searchValue
            };

            $state.go(stateNameToGo, stateParams, {notify: false});
        }

    }
})();
