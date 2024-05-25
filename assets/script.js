// Tableau contenant les images et descriptifs
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//              Declaration des Variables                //
// initialiser le compteur
let position = 0;

//Eléments HTML modifiés
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Bullets points
const dots = document.querySelector(".dots");

//  un click sur la  flèche gauche  lance la fonction previous slide qui pointe sur  (fonction nextSlide)
arrowLeft.addEventListener("click", previousSlide);


//  un click sur la  flèche droite  affiche le slide suivant (fonction nextSlide)
arrowRight.addEventListener("click", nextSlide);



// Création des points DOT ( nombre = slides.length-1) 

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

//     sélectionner tous les dot et initialiser le slide rempli par défaut

let dotList = document.querySelectorAll(".dot");
// attribution de la classe dot_selected ( background rempli) au slide en position 0
dotList[position].classList.add("dot_selected");


// Création de la fonction pour afficher le slide sélectionné 
function slideShow() {
  bannerImg.src = `./assets/images/slideshow/${slides[position].image}`;
  bannerText.innerHTML = slides[position].tagLine;
}

// Création de la fonction pour pointer sur le slide précédent 
function previousSlide() {
  // vider le point actuel
  dotList[position].classList.remove("dot_selected");
  // Si compteur <= 0, on pointe sur le dernier slide  en position[length-1])
  if (position <= 0) {
    position = slides.length - 1;
  }
  // Sinon position-1
  else {
    position--;
  }
  // remplir le nouveau point sélectionné
  dotList[position].classList.add("dot_selected");
  //  appel de la fonction pour l'affichage
  slideShow();
}

//Création de la fonction pour pointer sur le slide suivant 
function nextSlide() {
  //  vider le point actuel
  dotList[position].classList.remove("dot_selected");
  // Si compteur >= à la longueur du tableau, alors on pointe sur le 1er slide (position 0)
  if (position >= slides.length - 1) {
    position = 0;
  }
  // Sinon position = position + 1
  else {
    position++;
  }
  // remplir le nouveau point sélectionné
  dotList[position].classList.add("dot_selected");
  // appel de la fonction pour l'affichage
  slideShow();
}
