(function(){
    'use strict';

    angular.module('guest-post.filters').filter('removeUrlParts', removeUrlParts);

    removeUrlParts.$inject = [];

    function removeUrlParts(){

        function filter(input){
            return input.toString().replace(/https?:\/\//,'').replace('www.','').replace(/\/$/, '');
        }

        return filter;
    }


})();
