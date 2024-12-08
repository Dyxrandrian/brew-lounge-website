const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

// Fonction pour mettre à jour la position des images avec une rotation infinie
function updateCarousel() {
    const angle = 360 / totalItems;

    items.forEach((item, index) => {
        const rotation = angle * ((index - currentIndex + totalItems) % totalItems);
        item.style.transform = `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(300px)`;
    });
}

// Fonctions pour naviguer dans le carrousel
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Initialisation du carrousel
updateCarousel();
