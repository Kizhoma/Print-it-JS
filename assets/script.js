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
]

// const banner =
const arrowLeft = document.getElementsByClassName('arrow_left')[0];
const arrowRight = document.getElementsByClassName('arrow_right')[0];
// const bannerImage =
// const bannerText=


// On crée une variable avec le nombre d'éléments du tableau slides
const lastSlidesListIndex = slides.length - 1;
let currentSlideIndex = 0;
console.log(arrowLeft,arrowRight)

// Fonction pour créer les bullets
const createBullet = () => {
	const dots = document.querySelector('.dots');
	for (let j = 0; j < lastSlidesListIndex + 1; j++) {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		dots.appendChild(dot);
		if (j == 0) { 
			dots.children[j].classList.add('dot_selected');
		}
	}
}


// on appelle la fonction
createBullet();

// Lier le bullet à une image 
const bulletSelected = () => {
	const currentSelectedDot = document.getElementsByClassName('dot_selected');
	currentSelectedDot[0].classList.remove('dot_selected');
	document.getElementsByClassName('dot')[currentSlideIndex].classList.add('dot_selected');
}

// Changer le contenu img et text de la bannière


// Event au clic
arrowLeft.addEventListener('click', function() {
	if (currentSlideIndex == 0) {
		currentSlideIndex = lastSlidesListIndex;
	} else {
		currentSlideIndex--;
	}
	console.log("arrowLeft");
// 	changeSlide();
});

arrowRight.addEventListener('click', function() {
	if (currentSlideIndex == lastSlidesListIndex) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex++;
	}
	console.log("arrowRight");
	// changeSlide();
});