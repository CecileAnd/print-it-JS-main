// tableau : recense toutes les slides (4) dans des objets

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// rendre dynamique l'affichage de la première slide

let slideEnCours = 0;

// variables

let maBanniereImage = document.querySelector("#banner .banner-img");
let maBanniereTxt = document.querySelector("#banner p");
let cheminImage = "./assets/images/slideshow/";
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document.querySelector(".arrow_right");
let dots = document.querySelector(".dots");


// actualiser le contenu

console.log(maBanniereImage);
console.log(maBanniereTxt);


// maBanniereImage.src = "./assets/images/slideshow/slide3.jpg";


function changeSlide(numeroslide) {
	// changer image
	maBanniereImage.src = cheminImage + slides[numeroslide].image;
	// changer texte
	maBanniereTxt.innerHTML = slides[numeroslide].tagLine;
}


// initialiser la slide
changeSlide(slideEnCours);


// changer les slides au clic sur fleche

console.log(flecheDroite)

//ecouter l'evenement clic sur la fleche et changer la slide

flecheDroite.addEventListener("click", function() {
	console.log("clic droit");
	slideEnCours++; 
	console.log(slideEnCours);
	if (slideEnCours > (slides.length-1)) {
		slideEnCours=0;
	}
	changeSlide(slideEnCours);
	createDots();
})

flecheGauche.addEventListener("click", function() {
	console.log("clic gauche");
	slideEnCours--;
	console.log(slideEnCours);
	if (slideEnCours < 0) {
		slideEnCours = (slides.length-1);
	}
	changeSlide(slideEnCours);
	createDots();
});


/* Creer les dots */
function createDots() {
	dots.innerHTML="";
	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement("div");
		div.classList.add("dot");
		if (i === slideEnCours) {
			div.classList.add("dot_selected");
		}
		dots.appendChild(div);
	}

}

createDots();










