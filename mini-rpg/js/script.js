
let ts = new Tileset("../mini-rpg/tilesets/grass-tiles-2-small.png");


window.onload = function() {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	
	ts.dessinerTile(1, ctx, 10, 10);
    ts.dessinerTile(5, ctx, 50, 10);
    ts.dessinerTile(6, ctx, 90, 10);
    ts.dessinerTile(7, ctx, 130, 10);
    

}

/*
let map = new Map("premiere");

window.onload = function() {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	map.dessinerMap(ctx);
}

// Analyse des données
let mapData = JSON.parse(mapJsonData);


*/