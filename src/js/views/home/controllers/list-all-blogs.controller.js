(function(){

    'use strict';

    angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);

    function ListAllBlogsController(AlertsModel, SheetApi){
        var vc = this;
        AlertsModel.pushAlert( { type : 'success', message : 'Meu pastel é mais barato' } );

        var promise = SheetApi.getById('1');

        promise.success(function(blogs){
            console.log(blogs);
        });

    }
})();
