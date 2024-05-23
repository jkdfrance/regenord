//js pour la pge d acceuil
/*document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)*/
 
gsap.registerPlugin(ScrollTrigger); 

const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const link = document.querySelectorAll('nav li');
const lien = document.querySelector('lienNosActivités')
window.addEventListener('load', () => {

    const TL =gsap. timeline({paused: true})

    TL
    .staggerFrom(titreSpans, 1, {top: -50, popacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"},0.3, '-=1') //pour permettre aux boutons d apparaitre quand la premiere animation se lance 
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 1, {transform: 'scale(0)', ease:"power2.out"}, '-=2')

    TL.play();
});
//toggle animer.
/*document.getElementById('btn').addEventListener('click', function() {
  var container = document.getElementById('container-contexte');
  var icon = document.getElementById('btn-icon');

  if (container.classList.contains('show')) {
    container.classList.remove('show');
    icon.setAttribute('name', 'chevron-down');
  } else {
    container.classList.add('show');
    icon.setAttribute('name', 'chevron-up');
  }
});*/

document.getElementById('btn1').addEventListener('click', function() {
 let container1 = document.getElementById('container-contexte1');
  let icon1 = document.getElementById('btn-icon1');

  if (container1.style.display === 'block') {
    container1.style.display = 'none';
    icon1.setAttribute('name', 'chevron-down');
  } else {
    container1.style.display = 'block';
    icon1.setAttribute('name', 'chevron-up');
  }
});

document.getElementById('btn2').addEventListener('click', function() {
  let container2 = document.getElementById('container-contexte2');
  let icon2 = document.getElementById('btn-icon2');

  if (container2.style.display === 'block') {
    container2.style.display = 'none';
    icon2.setAttribute('name', 'chevron-down');
  } else {
    container2.style.display = 'block';
    icon2.setAttribute('name', 'chevron-up');
  }
});

document.getElementById('btn3').addEventListener('click', function() {
    let container3 = document.getElementById('container-contexte3');
    let icon3 = document.getElementById('btn-icon3');

    if(container3.style.display === 'block') {
        container3.style.display = 'none';
        icon3.setAttribute('name', 'chevron-down');
    }else{
        container3.style.display = 'block';
        icon3.setAttribute('name','chevron-up');
    }
})


// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sélectionnez les éléments que vous souhaitez animer lors du défilement
const elementsToAnimate = document.querySelectorAll('.container,.l1,.l2 .logo-reg, h1 span, .contains, .values, .container-first, .image-link');

// Configurez l'animation avec GSAP et ScrollTrigger pour chaque élément
elementsToAnimate.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element, // Déclencheur du défilement pour chaque élément spécifique
            toggleActions: "restart none none reset",
            start: "top 80%", // Démarre l'animation lorsque l'élément est à 80% du haut de la fenêtre
            markers: false, // Définissez cette option sur true pour afficher des marqueurs de déclenchement à des fins de débogage
        },
        y: 100,
        opacity: 0,
        scale: 1,
        ease: "elastic(0.4,0.15)",
        duration: 6,
        stagger: 1.1,
    });
});

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



// Sélectionnez les éléments .sidebar .image-link pour l'animation des images lors du défilement
/*const imagesToAnimate = document.querySelectorAll('.sidebar .image-link');

// Configurez l'animation avec GSAP et ScrollTrigger pour chaque image
imagesToAnimate.forEach(image => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: ".sidebar", // Déclencheur du défilement pour toute la barre latérale
            toggleActions: "restart none none reset",
            start: "top 80%", // Démarre l'animation lorsque la barre latérale est à 80% du haut de la fenêtre
            markers: false, // Définissez cette option sur true pour afficher des marqueurs de déclenchement à des fins de débogage
        },
        y: 100,
        opacity: 0,
        scale: 0,
        ease: "elastic(0.4,0.15)",
        duration: 1,
        stagger: 0.1,
    });
});*/

// Appeler la fonction lorsque le contenu est chargé
window.addEventListener('load', handleInitialAnimation);

//img expert decaler de droite a gauche.
document.addEventListener("DOMContentLoad", function ()  {
    setTimeout(function() {
        document.getElementById('expert').classList.add('slide-animation');
    }, 1000);
    });


//logo.
document.addEventListener("DOMContentLoaded", function() {
    // Ajouter une classe pour démarrer l'animation après un délai
    setTimeout(function() {
        document.getElementById('logo').classList.add('slide-animation');
    }, 1000); // délai de 1000ms (1 seconde) avant le démarrage de l'animation
});




//js pour activer les liens de la nav.
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

//EFFET  DE SOULIGNEMENT.
// Sélectionnez les liens spécifiques pour lesquels vous souhaitez appliquer l'effet de soulignement progressif
// Sélectionnez les liens spécifiques pour lesquels vous souhaitez appliquer l'effet de soulignement progressif
// Sélectionnez tous les liens dans la liste
let Links = document.querySelectorAll('#nav ul li:nth-child(1)a ', '#nav ul li:nth-chil(2)a');
// Parcourez chaque lien sélectionné
Links.forEach(function(link) {
    // Ajoutez un gestionnaire d'événement pour le survol de la souris
    link.addEventListener('mouseover', function () {
        this.style.width = '100px';
    });
      // Ajoutez un gestionnaire d'événement pour la sortie de la souris
    link.addEventListener('mouseout', function(){
         // Réinitialisez dynamiquement la largeur du soulignement lorsque la souris quitte
       
        this.style.width = '0';
    });
});

//gestionnaire d'événement de clic
let lienQuiNousSommes = document.getElementById('lienQuiNousSommes');

// Ajouter un gestionnaire d'événement de clic
lienQuiNousSommes.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut du lien (navigation vers la page)
    event.preventDefault();
    
    // Accéder à l'URL spécifiée dans l'attribut href
    window.location.href = this.getAttribute('href');
});

function ajouterGestionnaireClic(id) {
    let lien = document.getElementById(id);
    lien.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = this.getAttribute('href');
        
    });
}
// Ajouter des gestionnaires d'événements de clic pour chaque lien
ajouterGestionnaireClic('lienQuiNousSommes');
ajouterGestionnaireClic('lienNosActivites');
ajouterGestionnaireClic('lienAcceuil');
//animation img expert.

//image link
function moveImage(event, imageId) {
    event.preventDefault(); // Empêcher la redirection vers une nouvelle page

    let img = document.getElementById(imageId);
    let rect = img.getBoundingClientRect();
    let offsetX = event.clientX - rect.left - (rect.width / 8);
    let offsetY = event.clientY - rect.top - (rect.height / 8);

    img.style.transform = "translate(" + offsetX + "px, " + offsetY + "px)";
}

//logo pulsation.
function pulsateImage(){

}

let btn = document.getElementById('btn');
let btnIcon = document.getElementById('btn-icon');
let containerContexte = document.getElementById('container-contexte');



/*const toggleDetails = () {
    btnlcon.name
}*/

/*inserer un txte en js.
const div1 = document.getElementById("div1");
div1.textContent = "bonjour comme";
div1.innerHTML = "<i>bonjour</i>";*/



