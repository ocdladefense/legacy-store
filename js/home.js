window.onscroll = function(){
  const nav = document.querySelector('#banner');
  if(this.scrollY <= 20) {
  	nav.className = '';
  } else if(this.scrollY <= 550) {
  	nav.className = 'scrollDark';
  } else {
  	nav.className = 'scrollInit';
	}
};


$(function(){

	if(document.getElementById("promoted-posts")){
		globalScripts(["//"+OCDLA._get('domain')+"/sites/default/modules/wordpress/posts.js"],function(wpPosts){
			var endpoint = "//"+OCDLA._get('businessDomain')+"/wp-json/wp/v2/posts";
			var tagEndpoint = "//"+OCDLA._get('businessDomain')+"/wp-json/wp/v2/tags";
			
			
			function getTagId(name) {
				return wpPosts.getTags(tagEndpoint).then(function(tags) {
					console.log(tags);
					for(let i = 0; i< tags.length; i++) {
						if(tags[i].name == name) return tags[i].id;
					}
					return null;
				});
			}
			
			getTagId("store").then(function(tagId) {
				console.log("TagId is: "+tagId);
				wpPosts.getPosts(endpoint, tagId).then( function(posts){
						document.getElementById("promoted-posts").innerHTML = posts.join("\n");
				});
			});
				
				
		});
	}

});