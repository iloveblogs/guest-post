(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);

    function ListAllBlogsController(AlertsModel, SheetApi){
        var vc = this;
        AlertsModel.pushAlert( { type : 'success', message : 'Meu pastel é mais barato' } );

        var promise = SheetApi.getByIds(['1', '2', '3', '4', '5']);

        promise.success(function(blogs){
            console.log(blogs);
        });

    }
})();
