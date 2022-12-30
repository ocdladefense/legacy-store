console.log("Product scripts loaded.");




function enlargeThumbnail(e) {

	let target = e.target;
	let src = target.getAttribute("src");
	console.log("foobar");

	let primary = document.querySelector(".primary-image");
	primary.src = src;

	return false;
}



domReady(function() {
	let thumbs = document.querySelectorAll(".thumb");

	for(let i = 0; i<thumbs.length; i++) {
		thumbs[i].addEventListener("click", enlargeThumbnail);
	}
});