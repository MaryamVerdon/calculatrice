//Récupération des elmnt du DOM sous forme de touche
var touches = [...document.querySelectorAll(".bouton")];
var tabKeyCode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', function(event) {
    var valeur = event.keyCode.toString();
});

document.addEventListener('click', function(event){
    var valeur = event.target.dataset.key; 
});
