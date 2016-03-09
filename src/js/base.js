(function(){
    'use strict';

    angular.module('guest-post', GUEST.angularDependencies);
    angular.module("guest-post").config(guestConfig);
    angular.module("guest-post").run(guestRun);

    function guestConfig($interpolateProvider, $httpProvider, $urlRouterProvider, SheetApiProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        SheetApiProvider.configure.setSheetsuBaseUrl('https://sheetsu.com/apis/v1.0/658fb938');
    }
    function guestRun(){}

})();

