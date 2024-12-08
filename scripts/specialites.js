// Variables pour le carrousel
const carouselSpt = document.querySelector('.specialites-carousel');
const itemsSpt = document.querySelectorAll('.specialite-item');
const totalItemsSpt = itemsSpt.length;
let currentIndexSpt = 0;

// Fonction pour mettre à jour le carrousel
function updateCarouselSpt() {
    // Retirer la classe 'active' de toutes les images
    itemsSpt.forEach(itemSpt => itemSpt.classList.remove('active'));

    // Ajouter la classe 'active' à l'image actuellement centrée
    itemsSpt[currentIndexSpt].classList.add('active');

    // Déplacez le carrousel pour centrer l'image active
    const itemWidthSpt = itemsSpt[0].offsetWidth + 40; // Largeur + marges
    carouselSpt.style.transform = `translateX(${-currentIndexSpt * itemWidthSpt}px)`;
}

// Fonction pour aller à la spécialité suivante
function nextSlideSpt() {
    currentIndexSpt = (currentIndexSpt + 1) % totalItemsSpt; // Cycle infini
    updateCarouselSpt();
}

// Fonction pour aller à la spécialité précédente
function prevSlideSpt() {
    currentIndexSpt = (currentIndexSpt - 1 + totalItemsSpt) % totalItemsSpt; // Cycle infini
    updateCarouselSpt();
}

// Événements des boutons
document.querySelector('.spt-next-btn').addEventListener('click', nextSlideSpt);
document.querySelector('.spt-prev-btn').addEventListener('click', prevSlideSpt);

// Initialiser le carrousel
updateCarouselSpt();
