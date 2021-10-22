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

				wpPosts.getPosts(endpoint).then( function(posts){
						document.getElementById("promoted-posts").innerHTML = posts.join("\n");
				});
		});
	}

});