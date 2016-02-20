(function(){

	'use strict';

	angular.module('guest-post.views.home').controller('ListAllBlogsController', ListAllBlogsController);
	
	function ListAllBlogsController(SheetModel){
		var vc = this;

		vc.isLoadingSheetData = true;
		vc.vm = SheetModel;

		// TODO: Evitar várias buscas ao Sheetsu cacheando o resultado num localStorage da vida
		var testePromise = SheetModel.getSheetContent();
		testePromise.success(function(sheetData){			
			vc.isLoadingSheetData = false;
			vc.vm.blogsList = sheetData;
			console.log('logando dados armazenados no modelo');
			console.log(vc.vm.blogsList);
		});		

		console.log('logando a diretiva chamada pelo ui-router');
		console.log(vc);

	}

})();