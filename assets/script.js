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
// Les variables qui ciblent les différents éléments du DOM
const banner = document.getElementById('banner');
const arrowLeft = document.getElementsByClassName('arrow_left')[0];
const arrowRight = document.getElementsByClassName('arrow_right')[0];
const bannerImage = document.querySelector('#banner > img');
const bannerText= document.querySelector('#banner > p');

// On crée une variable avec le nombre d'éléments du tableau slides
const lastSlidesListIndex = slides.length - 1;
let currentSlideIndex = 0;

// Fonction pour créer les bullets
const createBullet = () => {
	const dots = document.querySelector('.dots');
	// on boucle sur le tableau slides pour créer le nombre exact de bullets
	for (let j = 0; j < lastSlidesListIndex + 1; j++) {
		// on crée un élément span
		const dot = document.createElement('span');
		// on applique le style css "dot"
		dot.classList.add('dot');
		// on ajoute les éléments "dot" dans le parent dots
		dots.appendChild(dot);
		// condition pour ajouter la class dot_selected
		if (j == 0) { 
			dots.children[j].classList.add('dot_selected');
		}
		// Ajouter un événement click pour chaque bullet
		dot.addEventListener('click', () => {
			currentSlideIndex = j;
			changeSlide();
		});
	}
}


// On nomme la fonction bullet
createBullet();

// Lier le bullet à une image 
const bulletSelected = () => {
	const currentSelectedDot = document.getElementsByClassName('dot_selected');
	currentSelectedDot[0].classList.remove('dot_selected');
	document.getElementsByClassName('dot')[currentSlideIndex].classList.add('dot_selected');
}

// Changer le contenu img et text de la bannière
const changeSlide = () => {
	bannerImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerText.innerHTML = slides[currentSlideIndex].tagLine;
}


// Event au clic
arrowLeft.addEventListener('click', function() {
	if (currentSlideIndex == 0) {
		currentSlideIndex = lastSlidesListIndex;
	} else {
		currentSlideIndex--;
	}
	changeSlide();
});

arrowRight.addEventListener('click', function() {
	if (currentSlideIndex == lastSlidesListIndex) {
		currentSlideIndex = 0;
	} else {
		currentSlideIndex++;
	}
	changeSlide();
});