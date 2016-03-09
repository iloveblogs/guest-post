(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListBlogsPageController', ListBlogsPageController);

    function ListBlogsPageController(ListBlogsModel, $stateParams){
        var vc = this;
        var pageParams = {
            pageNumber: $stateParams.pageNumber > 0 ? $stateParams.pageNumber : 0
        };

        ListBlogsModel.init(pageParams);
        ListBlogsModel.loadMoreBlogs();
    }

})();

