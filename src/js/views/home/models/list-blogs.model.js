(function(){

    'use strict';

    angular.module('guest-post.views.home').factory('ListBlogsModel', ListBlogsModel);

    function ListBlogsModel(SheetApi){
        var model = {
            blogGroups: [],
            blogsCount: null,
            pageCount: 0,
            init: init,
            isLoadingMoreBlogs: false,
            loadMoreBlogs: loadMoreBlogs,
            pageNumber: 1,
            pageInitialNumber: 0,
            pageSize: 12,
            resetBlogGroups: resetBlogGroups
        };
        return model;

        function init(pageParams){
            model.resetBlogGroups();
            model.pageNumber = parseInt(pageParams.pageNumber);
            model.pageInitialNumber = parseInt(pageParams.pageNumber);
        }

        function loadMoreBlogs(){
            model.isLoadingMoreBlogs = true;

            var pageParams = {
                pageStartAt: (model.pageNumber - 1) * model.pageSize,
                pageSize: model.pageSize
            };

            var promiseToGetMoreBlogs = SheetApi.getAllBlogs(pageParams);

            promiseToGetMoreBlogs.success(function(blogs){
                var blogGroupsLastIndex = model.blogGroups.length;
                model.blogGroups[blogGroupsLastIndex] = blogs.query.results.json;
                ++model.pageNumber;

            }).finally(function(){
                model.isLoadingMoreBlogs = false;
            });
        }

        function resetBlogGroups(){
            model.blogGroups = [];
        }
    };

})();
