if(!window.GUEST){
    var GUEST = {};
}

if(!GUEST.angularDependencies){
    GUEST.angularDependencies = [];
}

function jsFolder(jsRelativePath){
    var jsAbsolutePath = '/guest-post/js/'+jsRelativePath;
}

(function(){
    'use strict';

	if (!String.prototype.format) {

      String.prototype.format = function() {
	    var args = arguments;
	    return this.replace(/{(\d+)}/g, function(match, number) {
	      return typeof args[number] != 'undefined'
	        ? args[number]
	        : match
	      ;
	    });
	  };
	}


    GUEST.getCanonicalUrlFromCurrentPaginatedUrl = function(endsWithBackSlash, separator){
        separator = separator || /\/pagina|\?/;
        endsWithBackSlash = typeof endsWithBackSlash == 'undefined' ? true : endsWithBackSlash;
        var absUrl = window.location.href;
        var canonicalUrl = absUrl.split(separator);
        canonicalUrl = canonicalUrl[0];
        if(endsWithBackSlash) canonicalUrl = canonicalUrl.concat("/");
        return canonicalUrl;
    };


})();
