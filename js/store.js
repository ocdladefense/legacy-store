
var _config = {
	// context: "globalScripts",
	urlArgs: "bust=" +  (new Date()).getTime(),
	waitSeconds: 10,
	baseUrl: "//"+OCDLA._get('domain')+"/sites",
	paths: {
		"libEvent":"all/libraries/library/event",
		"libView":"all/libraries/library/view-core",
		"libData":"all/libraries/library/data",
		"libDatetime":"all/libraries/library/datetime",
		"libElement":"all/libraries/library/element",
		"libFormat":"all/libraries/library/format",
		"libFetch":"all/libraries/library/xhrFetch",
		"libModal":"all/libraries/library/modal",
		"libs":"force.com/assets/js/libraries"
	}
};

var globalScripts = require.config(_config);