
const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const links = document.querySelectorAll('nav li');
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


icons.addEventListener('click', () =>{ //button
    nav.classList.toggle('active');
});

links.forEach((link) => {
    link.addEventListener("click", () =>{
        nav.classList.remove('active');   
    });
});




//////////////////////////////////
// Fonction pour vérifier si un élément est visible dans la fenêtre du navigateur

///////////////////////////////////////


function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour vérifier l'apparition des éléments au défilement
function checkElementVisibility() {
    var elementsToShow = document.querySelectorAll('.hidden');
    elementsToShow.forEach(function(element) {
        if (isElementVisible(element)) {
            element.classList.add('show');
            element.classList.remove('hidden');
        }
    });
}

// Ajouter un écouteur d'événement de clic sur la page entière

//////////////////////////////////////////////////
const elementsToShow = document.querySelectorAll('.content, .values, .sidebar, .medias, p, h2, ul,.block-phrase');

// Fonction pour gérer l'affichage des éléments avec GSAP au chargement initial
function handleInitialAnimation() {
    elementsToShow.forEach(element => {
        gsap.fromTo(element, {
            opacity: 0,
            x: 50 // Décalage initial vers la droite
        }, {
            opacity: 1,
            x: 0, // Animer vers la gauche, donc x=0
            duration: 1 // Durée de l'animation
        });
    });
}

// Appeler la fonction lorsque le contenu est chargé
window.addEventListener('load', handleInitialAnimation);
//////////////////////////////////////////

/*gsap.from('.container, .contains, .medias, .sidebar', { opacity: 0, y: 50, duration: 1, stagger: 0.5 });
gsap.from('#crew', { opacity: 0, y: 50, duration: 1 });*/

// Fonction pour vérifier si un élément est visible à l'écran
// Fonction pour vérifier si un élément est visible à l'écran

/////////////////////////
gsap.to("", {
    y :-250,
 
    duration : 2,
    ease : 'elastic'
})
///////////////////////


// Sélectionner l'élément <a> avec l'ID "lienQuiNousSommes"
/*let lienQuiNousSommes = document.getElementById('lienQuiNousSommes');

// Ajouter un gestionnaire d'événement de clic
lienQuiNousSommes.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut du lien (navigation vers la page)
    event.preventDefault();
    
    // Accéder à l'URL spécifiée dans l'attribut href
    window.location.href = this.getAttribute('href');
});*/

// Fonction pour ajouter un gestionnaire d'événement de clic à tous les liens
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



//staggerFrom permet d animet plusieurs elements les uns à la suite des autres..
//le stagger permettra qu'entre chaque animation il se passera  0.3 secondes..
//power2.out permettra de rendre l'animation plus longue vers la fin...



const card = document.querySelectorAll(".card");
