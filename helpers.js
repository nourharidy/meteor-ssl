isHTTPS = function(){
	if(window.location.protocol == "https:" || document.location.protocol == "https:"){
		return true;
	} else {
		return false;
	}
}
switchHTTPS = function(port){
	if(!port){
		port = 443;
	}
	window.location = 'https://'+window.location.hostname+':'+port+window.location.pathname+window.location.search;
}
if (Meteor.isClient) {
	Meteor.startup(function(){
		if (Template) {
			Template.registerHelper('isHTTPS', function(){
				return isHTTPS();
			});
		}
	});
}
