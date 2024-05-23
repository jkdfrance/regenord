gsap.registerPlugin(ScrollTrigger);

const box1 = document.querySelector('box1');




gsap.to(listes-services, {
    xPercent : 500,
    ScrollTrigger : {
        trigger : listes-services,
        start : "top 40%",
        markers : true,
    }
});





/*const getKey = (key) => {
return key + '_bmw'
}

const car = {
    [getKey('color')] : 'red'
  }
  car[getKey('speed')] = 320

  console.log(car)*/

/*const fname = 'a'
const lname = 'b'
const age = 'c'

const person = {
  fname:'moi',
  lname: 'toi',
  age: 'age',
}*/


/*const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};

anakinSkywalker;*/

/*const person = {
  fname:'moi',
  lname: 'toi',
  age: 'age',
   city: {
    ville:'paris',
    cp: 750014
  }
}

person;*/

/*for(const key in person){
  person[key] = 'mehdi'

}
person*/

/*const person = ['moi', 'toi', 2]

person.push('toto')
person*/

/*const adresse =   {
  ville:'paris',
  rue: 'rue alesia',
  cp: 75014,
}

const person = {
  fname:'moi',
  lname: 'toi',
  age: 53,
  
}

const adresse2 =   {
  ville:'paris',
  rue: 'republique',
  cp: 750148,
}

const person2 = {
  fname:'toto',
  lname: 'tata',
  age: 3,
  
}

const student = {
  ...person,
  adresse: {
   ...adresse
  },
  universite: 'daudet',
}
const student2 = {
  fname:person2.fname,
  lname:person2.lname,
  age:person2.age,
  adresse2:{
    ville:adresse2.ville,
    rue:adresse2.rue,
    cp:adresse2.cp,
  },
  universite2: 'wallon',
}

console.log(person)
console.log(adresse)
console.log(student)

console.log(person2)
console.log(adresse2)
console.log(student2)*/
//////////////////////////////////////////////////

/*let acteur = {
  'nom' : 'moi',
  "prenom": 'toi',
  "age" : 53,
  sePresenter : function () {
    console.log('bonjour je m\' appelle '+ this.nom)
  }
}
acteur.sePresenter();*/

/*function acteur(nom,prenom,age){
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.sePresenter = () => {
    console.log('bonjour je m\' apelle '+ this.nom+" "+this.prenom)
  }
}

let moi = new acteur("toto","tata",5)
let caro = new acteur('caro','yaya',2)

caro.sePresenter()
moi.sePresenter()

function film(titre,annee,acteur) {
  this.titre = titre;
  this.annee = annee;
  this.acteur = acteur;
}

let parrain = new film('parrain',1987,'moi')
console.log(parrain)*/

/*class acteur {
  constructor(nom,prenom,age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
  sePresenter ()  {
    console.log('bonjour je m\' apelle '+ this.nom+" "+this.prenom)
  
  }
  
}

let thomas = new acteur('thomas','yaya',1)
thomas.sePresenter();*/

//----------------------------------

/*class animal {
  constructor(nbPattes,poids,couleur){
    this.nbPattes = nbPattes;
    this.poids = poids;
    this.couleur = couleur
  }
  pedigrer() {
    console.log("l\'animal a  " +this.nbPattes+ ' pattes  et son poid est de ' +this.poids+ 'kgs, sa couleur est ' +this.couleur);
  }
}

let chat = new animal(10,5,'rose');
chat.pedigrer();*/
/////
/*class Oiseau extends animal {
  constructor(nbPattes,poids,longueurAile) {
    super(nbPattes,poids);
    this.longueurAile = longueurAile;
  }
  voler() {
    console.log('son poid est de   ' + this.poids + 'kgs et  la taille des ailes est de ' +this.longueurAile+  ' metres')
  }
}
let aigle = new Oiseau(10,5,7);
aigle.voler(10,5,4);*/


/*class canin extends animal {
  constructor(nbPattes,poids,longueurAile,race) {
    super(nbPattes,poids);
    this.longueurAile = longueurAile;
    this.race= race;
  }
  canider() {
    console.log('son poid est de   ' + this.poids + 'kgs et  la taille des ailes est de ' +this.longueurAile+  ' metres et  c est un ' + this.race)
  }
}
let chien = new canin(10,5,7,'kelb');
chien.canider();*/

//--------------------------------------------

/*class car {
  constructor(brand, year, model) {
    this.brand = brand;
    this.year = year;
    this.model = model;
  }
  getYear() {
  return this.year
  }
  getBrand() {
    return this.brand 
  } 
  getModel() {
    return this.model
  }
  static calculateAge(currentyear, year) {
    return currentyear = year
  }
  
  }
const bmw = new car('bmw', 1985, 'TDS')
console.log(bmw.getYear())
console.log(bmw.getBrand())
console.log(bmw.getModel())
console.log(car.calculateAge(2000, bmw.getYear()))*/

//--------------------------------------

//CODE AU FORMAT JSON//

/*let url = 'https://geo.api.gouv.fr/communes?codePostal=';
let codePostal = prompt('veuilez saisir le code postal');
url +=  codePostal;

/*let requete = new XMLHttpRequest();

requete.open('GET', url);
requete.responseType = 'json';
requete.send();
requete.onload = function() {
  if(requete.readyState === XMLHttpRequest.DONE) {
    if(requete.status === 200) {
      let reponse = requete.response;
      for(let data  of reponse) {
        console.log(data.nom + ' est une ville ' + data.population  + ' d\'habitants');
      }
    } else {
      alert ('probleme');
    }
  }
}*/

/*let url = 'https://geo.api.gouv.fr/communes?codePostal=';
let codePostal = prompt('veuilez saisir le code postal');
url +=  codePostal;



fetch(url)
.then(reponse  => reponse.json())
.then(data => {
  for(ville of data) {
    console.log(ville.nom + ' est une ville de ' +  ville.population  + ' habitants')
}})
  
.catch((err => console.log('erreur :' + err)))*/


let url = 'https://api.meteomatics.com/2024-03-25T00:00:00Z/t_2m:C/52.520551,13.461804/html'
let ville = prompt('indiquer la ville')
url += ville

fetch(url)
.then(reponse => reponse.json())
.then(data => {
  for(ville of data) {
  console.log('temperature est ' + ville.nom + 'degrés')
}})
 .catch((err => console.log("erreur: " + err)))