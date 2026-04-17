let voiture1 = document.getElementById("voiture1");
let voiture2 = document.getElementById("voiture2");

let translationX1 = 0;
let translationX2 = 0;

let voiture1Width = 100;
let voiture2Width = 100;
let containerWidth = 1000;
let maxTranslationX = 900;

let compteur = 3;
let intervalRebours;
let intervalDeplacement;
let intervalChrono;

function demarrerCourse() {
    document.getElementById("btn").style.display = "none";
    document.getElementById("compteARebours").innerHTML = compteur;
    intervalRebours = setInterval(compteARebours, 1000);
}

function compteARebours() {
    compteur--;
    document.getElementById("compteARebours").innerHTML = compteur;

    if (compteur === 0) {
        clearInterval(intervalRebours);
        document.getElementById("compteARebours").style.display = "none";

        intervalChrono = lancerChrono();
    }
}

function chronometre(ms) {
    let minutes = Math.floor(ms / 60000);
    let secondes = Math.floor((ms % 60000) / 1000);
    let millisecondes = ms % 1000;

    millisecondes = Math.floor(millisecondes / 10);

    return String(minutes).padStart(2, "0") + ":"
        + String(secondes).padStart(2, "0") + ":"
        + String(millisecondes).padStart(2, "0");
}

function lancerChrono() {
  let depart = Date.now();

  return setInterval(function() {
    let ecoule = Date.now() - depart;
    let temps = chronometre(ecoule);

    document.getElementById("tempsMauve").value = temps;
    document.getElementById("tempsRose").value = temps;
  }, 10);
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