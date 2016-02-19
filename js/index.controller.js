(function(){
	angular.module('guest-post').controller('indexController', indexController);
	function indexController(SheetModel){
		var vc = this;
		vc.isLoadingSheetData = true;
		vc.vm = SheetModel;

		var testePromise = SheetModel.getSheetContent();
		testePromise.success(function(sheetData){			
			vc.isLoadingSheetData = false;
			console.log(sheetData);
		});		
	}

})();