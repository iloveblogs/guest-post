(function(){

    angular.module('guest-post.sheet-api').provider('SheetApi', SheetApiProvider);

    function SheetApiProvider(){

        var configure = {
            sheetsuBaseUrl: null,
            setSheetsuBaseUrl: setSheetsuBaseUrl
        };

        var provider = {
            $get: SheetApi,
            configure: configure
        };
        return provider;


        function setSheetsuBaseUrl(sheetsuBaseUrl){
            configure.sheetsuBaseUrl = sheetsuBaseUrl;
        }

        SheetApi.$inject = ['AjaxModel'];

        function SheetApi(AjaxModel){

            var baseYQLUrl = "https://query.yahooapis.com/v1/public/yql";

            var restApi = {
                getById: getById,
                getByIds: getByIds,
                getAllBlogs: getAllBlogs,
                configure: configure
            };
            return restApi;


            function _parseFiltersToQuery(filters){
                var baseQuery = 'select json from json';

                if(filters.pageStart && filters.pageSize){
                    baseQuery+='({0}, {1})'.format(filters.pageStart, filters.pageSize);
                    baseQuery = baseQuery;
                }

                baseQuery += ' where url="'+restApi.configure.sheetsuBaseUrl+'"';
                return baseQuery;
            }

            function getById(id, filters){
                var filters = filters || {};
                var query = _parseFiltersToQuery(filters);
                query+=' and json.id='+id;
                var params = {
                    q: query,
                    format: 'json'
                };
                return AjaxModel.get(baseYQLUrl, params);
            }

            function getByIds(ids, filters){
                var filters = filters || {};
                var query = _parseFiltersToQuery(filters);
                query+=' and json.id IN ('+ids+')';
                var params = {
                    q: query,
                    format: 'json'
                };
                return AjaxModel.get(baseYQLUrl, params);
            }

            function getAllBlogs(filters){
                var filters = filters || {};
                var query = _parseFiltersToQuery(filters);

                var params = {
                    q: query,
                    format: 'json'
                };

                return AjaxModel.get(baseYQLUrl, params);
            }
        }
    }

})();
