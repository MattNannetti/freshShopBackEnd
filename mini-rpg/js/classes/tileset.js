function Tileset(url) {
	// Chargement de l'image dans l'attribut image
	this.image = new Image();
	this.image.referenceDuTileset = this;
	this.image.onload = function() {
		if(!this.complete) 
            throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
            // Largeur du tileset en tiles
            this.referenceDuTileset.largeur = this.width / 32;

	}
	this.image.src = url;
}

// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées x et y
Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination) {
	var xSourceEnTiles = numero % this.largeur;
    if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
    var ySourceEnTiles = Math.ceil(numero / this.largeur);
    var xSource = (xSourceEnTiles - 1) * 32;
    var ySource = (ySourceEnTiles - 1) * 32;
    context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);

}

/*
function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}


function Map(nom) {
	
    // Création de l'objet XmlHttpRequest
	var xhr = getXMLHttpRequest();

    // Ici viendra le code que je vous présente ci-dessous
    // Chargement du fichier
    xhr.open("GET", './maps/' + nom + '.json', false);
    xhr.send(null);
    if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
        throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
    var mapJsonData = xhr.responseText;

}
*/