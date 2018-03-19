//Mettre à jour le temps toutes les 10 secondes
function loadWether(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			afficheWether(this.responseText);
		}
	};
	xhttp.open("POST", "php/wether.php", true);
	xhttp.send();
	setTimeout(loadWether, 10000);
}

//Télécharger l'article html spécifié avec php
function loadArticle(url) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			afficheArticle(this.responseText);
			}
	};
	xhttp.open("GET", "php/article.php?xmlUrl="+url, true);
	xhttp.send();
}

//Placer un article sur le page html
function afficheArticle(contenu){
	document.getElementById("forArticle").innerHTML = contenu;
}

//Placer un wether sur le page html
function afficheWether(txtJSON){
	var objJSON = JSON.parse(txtJSON);
	var contenu="<p>"+objJSON.cityname+" ("+objJSON.today+")</p>";
	contenu+="<p>"+objJSON.temp+" &deg;С</p>";
	contenu+="<img src=\""+objJSON.icon+"\" alt=\"wether icon\">";
	document.getElementById("wetherInf").innerHTML=contenu;
}