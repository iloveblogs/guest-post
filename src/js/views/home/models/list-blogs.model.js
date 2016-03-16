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
            resetBlogGroups: resetBlogGroups,
            pageType: 'default'
        };
        return model;

        function init(pageParams){
            model.resetBlogGroups();
            model.pageNumber = parseInt(pageParams.pageNumber);

            if(pageParams.pageType){
                model.pageType = pageParams.pageType;
            }

            if(model.pageType === 'search'){
                model.searchValue = pageParams.searchValue;
            }

            model.pageInitialNumber = parseInt(pageParams.pageNumber);
        }

        function loadMoreBlogs(){
            model.isLoadingMoreBlogs = true;

            var promiseToGetBlogsMap = {
                'default': SheetApi.getAllBlogs,
                'search': SheetApi.getByDescricao
            };

            var pageParams = {
                pageStartAt: (model.pageNumber - 1) * model.pageSize,
                pageSize: model.pageSize,
            };


            if(model.pageType === 'default'){
                var promiseToGetMoreBlogs = promiseToGetBlogsMap[model.pageType](pageParams);
            }

            else if(model.pageType === 'search'){
                var promiseToGetMoreBlogs = promiseToGetBlogsMap[model.pageType](model.searchValue, pageParams);
            }


            promiseToGetMoreBlogs.success(function(blogs){
                blogs.query.results.json = [].concat(blogs.query.results.json);

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
