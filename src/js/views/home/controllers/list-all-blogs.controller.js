(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);

    function ListAllBlogsController(AlertsModel, SheetApi){
        var vc = this;
        var promise = SheetApi.getAllBlogs({pageStart: 0, pageSize: 12});
        vc.isLoadingPromise = true;

        promise.success(function(blogs){
            vc.blogs = blogs.query.results.json;
            vc.isLoadingPromise = false;
        });
    }
})();
