let voiture1 = document.getAnimations("voiture1");
let voiture2 = document.getElementById("voiture2");
let translationX1;
let translationX2;
let voiture1Width = 100;
let voiture2Width = 100;
let containerWidth = 1000;
let maxTranslationX = 900;
let compteur = 3;
let interval;

function demarrerCourse() {
    document.getElementById("btn").style.display = "none";
    document.getElementById("compteARebours").innerHTML = compteur;
    interval = setInterval(compteARebours, 1000);
}

function compteARebours() {
    compteur--;
    document.getElementById("compteARebours").innerHTML = compteur;
    if (compteur === 0) {
        clearInterval(interval)
        document.getElementById("compteARebours").style.display = "none";
    }
}

function chronometre() {
    /* 
        Deux chronomètres sont utilisés pour mesurer le temps de chaque voiture lorsqu'elle atteint la ligne d'arrivée.
    */
}

function aleatoireTranslationX() {
    let translationAleatoire = Math.floor(Math.random() * maxTranslationX) + 1;
    return translationAleatoire;
}

function deplacerVoiture() {
    /* 
        I. Met à jour les positions horizontales des voitures à intervalles réguliers pour simuler le
        mouvement.

        II. À chaque appel, ajoutez la valeur de aleatoireTranslationX() à translationX1 et translationX2 pour les déplacements aléatoires.

        III. Vérifiez si les translations dépassent les limites du conteneur et ajustez-les si nécessaire.

        IV. Mettez à jour les propriétés CSS left des voitures (voiture1.style.left et voiture2.style.left) avec les nouvelles positions.
    */
}
