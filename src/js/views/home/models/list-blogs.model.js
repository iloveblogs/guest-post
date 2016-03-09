(function(){

    'use strict';

    angular.module('guest-post.views.home').factory('ListBlogsModel', ListBlogsModel);

    function ListBlogsModel(SheetApi){
        var model = {
            loadMoreBlogs: loadMoreBlogs,
            isLoadingMoreBlogs: false,
            blogsCount: null,
            pageNumber: 0,
            pageSize: 12,
            blogList: null,
            init: init
        };
        return model;

        function init(pageParams){
            model.pageNumber = parseInt(pageParams.pageNumber);
        }

        function loadMoreBlogs(){
            model.isLoadingMoreBlogs = true;

            var pageParams = {
                pageStartAt: model.pageNumber * model.pageSize,
                pageSize: model.pageSize
            };

            var promiseToGetMoreBlogs = SheetApi.getAllBlogs(pageParams);

            promiseToGetMoreBlogs.success(function(blogs){
                if(!model.blogList) {
                    model.blogList = [];
                }
                model.blogList = model.blogList.concat(blogs.query.results.json);
                console.log(model.blogList);


                model.pageNumber++;
            }).finally(function(){
                model.isLoadingMoreBlogs = false;
            });
        }
    };

})();
