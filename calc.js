let tab = document.getElementsByClassName("button");
let ecran = document.getElementById("affichage");
let egal = document.getElementById("result");

for(let i = 0; i < tab.length; i++){

    tab[i].addEventListener("click", affich);

}
function affich(){

    ecran.textContent = this.textContent;
    return;
}

egal == eval();
 
egal.addEventListener("click", eval);














    



