$(document).ready(function(){


	var h = 16;
	var l = 16;

	var createGrid = function (hauteur, largeur) {
		for (i = 0; i < hauteur; i++){
			for ( j = 0; j <= largeur; j++){		//Crée autant de div que la valeur largeur
				if ( j == largeur ){
					$(".container").append("<div class = clear case></div>");		//Permet le retour à la ligne
				}else{
					$(".container").append("<div class = case></div>");
				}
			}
		}
	}


	createGrid(h, l);
});
