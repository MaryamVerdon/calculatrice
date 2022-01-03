//Récupération des elmnt du DOM sous forme de touche
var touches = [...document.querySelectorAll(".bouton")];
var tabKeyCode = touches.map(touche => touche.dataset.key);
var ecran = document.querySelector('.ecran');

document.addEventListener('keydown', function(event) {
    var valeur = event.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', function(event){
    var valeur = event.target.dataset.key; 
    calculer(valeur);
});

function calculer (valeur) {
    //vérification de la touche saisie
    if(tabKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                var calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
            break;
            default : 
                //vérificatin de l'index de la touche
                var indexKeyCode = tabKeyCode.indexOf(valeur);  
                var touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;   
        }
    }
}