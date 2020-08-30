var images = document.getElementsByTagName("img");
var imgUrl = "";
var urlPrefix = "https://web.archive.org/web/00000000000000/";
var i = 0;

for(i=0;i<images.length;i++){
	
	var image = images[i];
	imgUrl = image.src;
//	console.log("src: " + imgUrl + ", naturalDimensions: " + image.naturalHeight);
	
	
	if (!imgUrl.match(urlPrefix) && image.naturalHeight == 0){		
		image.src = urlPrefix + imgUrl;
	}	
 }




