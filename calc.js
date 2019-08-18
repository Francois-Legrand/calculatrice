/*on attribue à la variable tab un tableau qui ecoute la classe button des elements html*/
let tab = document.getElementsByClassName("button");
let ecran = document.getElementById("affichage");
let egal = document.getElementById("result");
let reset = document.getElementById("reset");
let returner = document.getElementById("return");

/*on incremente i jusqu'a ce qu'a la fin de la longueur du tableau*/
for(let i = 0; i < tab.length; i++){
/*lorsque l'on clique sur une valeur du tableau qui ecoute la classe button on appel la fonction affich*/
    tab[i].addEventListener("click", affich);
}

function affich(){
/*Si le texte de la variable ecran est egal a 0 alors la variable ecran est egal a une chaine de caractere vide*/
    if(ecran.textContent == 0){
        ecran.textContent = "";
    }
    /*on concatene le texte de la variable ecran à celui de l'objet tab[i] (this.textContent)*/
    ecran.textContent += this.textContent;
    return;
}

function resultats(){
/*le texte de la variable ecran est egal a la fonction eval qui calcul le texte de la fonction ecran*/
    ecran.textContent = eval(ecran.textContent);

    return;
}
/*lorsque l'on clique la variable egal on appel la fonction resultats*/
egal.addEventListener("click", resultats);

function effac(){
/*le texte de la variable ecran est egal a 0*/
    ecran.textContent = "0";

    return;
}
/*lorsque l'on clique la variable reset on appel la fonction effac*/
reset.addEventListener("click", effac);

function arriere(){
/*le texte de la variable ecran est egal au texte deja present dans la variable et appel la fonction replace qui insere le texte de la variable ecran dans un tableau. la fonction supprime un element du debut du tableau et le remplace par une chaine de caractere vide.*/
    ecran.textContent = ecran.textContent.replace(ecran.textContent.slice(-1), "")
    return;
}
/*lorsque l'on clique la variable returner on appel la fonction arriere*/
returner.addEventListener("click", arriere);








