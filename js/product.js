var toggleDrawer = function(){
	jQuery('.nav-mobile').toggleClass('open');
	jQuery(document.body).toggleClass('drawer-open');
};


var menuNav = function(e) {
	e = e || window.event;
	e.preventDefault();
	e.stopPropagation();
	var target, url;
	
	target = e.target || e.srcElement;
	
	if(target.dataset && target.dataset.catalogId) {
		url = 'null' != target.dataset.url ? target.dataset.url : '/OcdlaCatalog?name='+target.dataset.catalogName;
	} else {
		return true;
	}
	
	window.location = url;
	return false;
};


jQuery(function(){

	$('#drawer-toggle').click(toggleDrawer);

	var menus = document.getElementsByClassName('catalog-menu');
	
	for(var i = 0; i<menus.length; i++){
		menus[i].addEventListener('click',menuNav,false);
	}
});