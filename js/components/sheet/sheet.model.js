(function(){
    "use strict";

    angular.module('guest-post.sheet').provider('SheetModel', SheetModelProvider);

    function SheetModelProvider(){
        var sheetsuBaseURL = null;

        var provider = {
            setSheetsuUrl: setSheetsuUrl,
            $get: SheetModel
        };

        function setSheetsuUrl(sheetsuUrl){
            sheetsuBaseURL = sheetsuUrl;
        }

        return provider;

        SheetModel.$inject = ["AjaxModel"];
        function SheetModel(AjaxModel){
            var model = {
                createNewSheetLine: createNewSheetLine,
                init: init,
                getSheetContent: getSheetContent,
                sheetsuBaseURL: sheetsuBaseURL,
            };            

            return model;

            function createNewSheetLine(sheetLine){
                var createNewSheetLinePromise = AjaxModel.post(model.sheetsuBaseURL,sheetLine);
                return createNewSheetLinePromise;
            }

            function getSheetContent(){
                var sheetContentPromise = AjaxModel.get(model.sheetsuBaseURL);
                return sheetContentPromise;
            }       

            function init(){}
        }
    }
    
})();