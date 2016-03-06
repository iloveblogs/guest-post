(function(){
    "use strict";

    angular.module('guest-post.ajax').factory('AjaxModel', AjaxModel);

    AjaxModel.$inject = ["$http", "$httpParamSerializer"];

    function AjaxModel($http, $httpParamSerializer){
        var model = {
            post: post,
            get: get,
        };

        return model;

        function post(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: 'POST',
                url: url,
                data: $httpParamSerializer(params)
            });
            return promise;        
        }

        function get(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: 'GET',
                url: url,
                params: params
            });        
            return promise;
        }
    }
})();