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


// Récuperer les elements :)


// les flèches
const ArrowLeft = document.getElementById("js-arrow_left"); 
const ArrowRight = document.getElementById("js-arrow_right"); 


//caroussel
const ImagesSlider=document.getElementById("js-banner-img");

const DotsSlider=document.getElementById("js-dots"); 
const TaglineElement = document.getElementById("js-text-img");

let currentSlideIndex = 0;




// ajouter les 4 dots  

for (let i = 0; i < slides.length; i++) {
    const newDot = document.createElement("div"); // creation des éléments
    newDot.classList.add("dot");
    DotsSlider.appendChild(newDot); // add to the container 
}

// Récupération des bullets point créés
const dots = DotsSlider.querySelectorAll(".dot");





// Function to update the image, tagline, and dots based on the current slide index

function updateSlide() {
    ImagesSlider.src ="./assets/images/slideshow/"+ slides[currentSlideIndex].image;  // Met à jour l'attribut src de l'élément ImagesSlider avec le chemin de l'image de la diapositive actuelle
    TaglineElement.innerHTML = slides[currentSlideIndex].tagLine;  // Met à jour le contenu HTML de l'élément TaglineElement avec le slogan de la diapositive actuelle

	
    dots.forEach(dot => dot.classList.remove("dot_selected")); // Retire la classe "dot_selected" de tous les points
    dots[currentSlideIndex].classList.add("dot_selected"); // Ajoute la classe "dot_selected" à l'élément de l'array dots correspondant à la diapositive actuelle
};


// ajouter les eventlisteners à des flèches et defilement circulaire des diapositives au click
// en utilisant des conditions


ArrowLeft.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    updateSlide();
});

ArrowRight.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    updateSlide();
});

updateSlide();

