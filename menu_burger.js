// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    // Trouver l'élément avec la classe 'header_burger'
    const burger = document.querySelector('.header_burger');
    // Trouver l'élément avec la classe 'header_right'
    const headerRight = document.querySelector('.header_right');
    // Trouver l'élément avec la classe 'li_github'
    const gitHub = document.querySelector('.li_github');

    // Ajouter un écouteur d'événement au clic sur 'burger'
    burger.addEventListener('click', function() {
        // Ajouter ou enlever la classe 'active' sur 'burger'
        burger.classList.toggle('active');
            // Ajouter ou enlever la classe 'active' sur 'burger'
            headerRight.classList.toggle('active');
    });
});
