(function(){

    angular.module('guest-post.sheet-api').factory('SheetApi', SheetApi);

    SheetApi.$inject = ['AjaxModel'];

    function SheetApi(AjaxModel){

        var baseYQLUrl = "https://query.yahooapis.com/v1/public/yql";
        var sheetsuBaseURL = "https://sheetsu.com/apis/v1.0/658fb938";

        var restApi = {
            getById: getById,
            getAllBlogs: getAllBlogs
        };
        return restApi;

        function _parseFiltersToQuery(filters){
            var baseQuery = 'select json from json';

            if(filters.pageStart && filters.pageSize){
                baseQuery+='({0}, {1})';
                baseQuery = baseQuery.format(filters.pageStart, filters.pageSize);
            }

            baseQuery += ' where url="'+sheetsuBaseURL+'"';
            return baseQuery;
        }

        function getById(id, filters){
            var query = _parseFiltersToQuery(filters);
            query+=' and json.id='+id;
            var params = {
                q: query,
                format: 'json'
            };
            return AjaxModel.get(baseYQLUrl, params);
        }

        function getAllBlogs(filters){
            var query = _parseFiltersToQuery(filters);

            var params = {
                q: query,
                format: 'json'
            };

            return AjaxModel.get(baseYQLUrl, params);
        }

    }

})();
