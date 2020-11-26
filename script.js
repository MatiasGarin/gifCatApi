

var cat = null;

function ajax_get(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log('responseText:' + xmlhttp.responseText);
			try {
				var data = JSON.parse(xmlhttp.responseText);
			} catch (err) {
				console.log(err.message + " in " + xmlhttp.responseText);
				return;
			}
			callback(data);
		}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//Version copada
function generateCat() {

	ajax_get('https://api.thecatapi.com/v1/images/search?mime_types=gif', function (data) {
		cat = data[0]["url"];

		var image = document.createElement('img');
		image.src = cat;
		var container = document.getElementsByClassName("container-flex-box");
		container[0].appendChild(image);
	});

} 

//Version liviana
/*function generateCat() {
	var image = document.createElement('img');

	if(cat != null){
		image.src = cat;
		
	} else{
		ajax_get('https://api.thecatapi.com/v1/images/search?mime_types=gif', function (data) {
		cat = data[0]["url"];
		image.src = cat;
	});

	}
	
	var container = document.getElementsByClassName("container-flex-box");
	container[0].appendChild(image);
}*/


