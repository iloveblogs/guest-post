(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);

    function ListAllBlogsController(AlertsModel, SheetApi){
        var vc = this;
        // AlertsModel.pushAlert( { type : 'success', message : 'Meu pastel é mais barato' } );

        // var promise = SheetApi.getByIds(['1', '2', '3', '4', '5']);
        // var promise = SheetApi.getByCategoria('moda');
        var promise = SheetApi.getAllBlogs({pageStart: 0, pageSize: 12});
        // var promise = SheetApi.getAllBlogs();
        vc.isLoadingPromise = true;

        promise.success(function(blogs){
            vc.blogs = blogs.query.results.json;
            vc.isLoadingPromise = false;
        });

    }
})();
