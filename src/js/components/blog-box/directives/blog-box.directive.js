(function(){
    angular.module('guest-post.blog-box').directive('blogBox', BlogBoxDirective);

    function BlogBoxDirective(BlogBoxModel){
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                blog: '='
            },
            controller: 'BlogBoxController',
            controllerAs: 'vc',
            bindToController: true,
            templateUrl: '/js/components/blog-box/templates/blog-box.template.html',
        };
        return directive;
    }

})();
