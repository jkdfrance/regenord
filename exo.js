/*let age = 53
let nom;
nom = prompt('nom')
console.log(nom,age)*/

/*let nom = 'moi'
let validation;
validation = confirm('veux tu supprimer le fichioer')
console.log(validation);*/


/*__________________________________*/
//CREER DES FONCTIONS//

function direBonjour() {
    let message = 'bienvenue sur js'
    console.log(message)
}
direBonjour()
                    //le b est = a 5    
function multipl(a , b = 5) {
    let result = a * b;
    console.log(result)
}
multipl(10)

/////////////////////////
let varGlobale = ' variable globale' //
function portabilite() {
    let varLocale = 'variable locale'
    console.log(varGlobale) //rappel la variable globale qui est en dehors de la fonction 
}               
varGlobale = 'changement de variable'
p
const button =document.querySelector('#submit');
const mainTitle = document.querySelector('.main-title');
 
document.addEventListener('keydown', function (event) {
    console.log(event);
    if(event.keyCode === 70) { mainTitle.classList.toggle('spectacular');
}
       
button.addEventListener('click', function (event) {
    
    mainTitle.style.color = "red";
    mainTitle.style.fontSize = '50px';
   
    
 //JavaScript pour afficher un texte dans un élément HTML
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne l'élément div avec l'id "conteneur"
    var conteneur = document.getElementById("conteneur");
    
    // Crée un élément paragraphe
    var paragraphe = document.createElement("p");
    
    // Crée un nœud texte contenant le texte à afficher
    var texte = document.createTextNode("Bonjour, voici un exemple de texte affiché en utilisant HTML et JavaScript !");
    
    // Ajoute le nœud texte à l'élément paragraphe
    paragraphe.appendChild(texte);
    
    // Ajoute l'élément paragraphe au conteneur
    conteneur.appendChild(paragraphe);
})

