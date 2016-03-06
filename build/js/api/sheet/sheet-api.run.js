(function(){
    angular.module('guest-post.sheet-api').run(SheetApiRun);

    function SheetApiRun(SheetApi){
        if(!SheetApi.configure.sheetsuBaseUrl){
            console.error('[ERRO] Você precisa especificar a sua url sheetsu na configuração de seu app.');
        }
    }

})();
