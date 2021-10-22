define(["libEvent","libView","libData","libDatetime","libElement","libFormat","libFetch","libModal"],function(libEvent,libView,libData,libDatetime,libElement,libFormat,libFetch,libModal){

	var mods = {
		data: libData,
		view: libView,
		event: libEvent,
		datetime: libDatetime,
		element: libElement,
		format: libFormat,
		fetch: libFetch,
		modal: libModal
	};
	
	function getModule(name){
		return mods[name] || null; 
	}
	
	return {
		getModule: getModule
	};

});