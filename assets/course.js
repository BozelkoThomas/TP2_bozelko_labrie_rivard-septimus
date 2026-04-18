let translationX1 = 0;
let translationX2 = 0;
 
let voiture1Width = 100;
let voiture2Width = 100;
let containerWidth = 1000;
let maxTranslationX = 900;
 
let compteur = 3;
let intervalRebours;
let intervalDeplacement1;
let intervalDeplacement2;
let intervalChrono1;
let intervalChrono2;
 
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
 
        intervalChrono1 = lancerChrono1();
        intervalChrono2 = lancerChrono2();
 
        intervalDeplacement1 = setInterval(deplacerVoiture1, 1000);
        intervalDeplacement2 = setInterval(deplacerVoiture2, 1000);
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
 
function lancerChrono1() {
    let depart = Date.now();
 
    return setInterval(function () {
        let ecoule = Date.now() - depart;
        let temps = chronometre(ecoule);
 
        document.getElementById("tempsMauve").value = temps;
    }, 10);
}
 
function lancerChrono2() {
    let depart = Date.now();
 
    return setInterval(function () {
        let ecoule = Date.now() - depart;
        let temps = chronometre(ecoule);
 
        document.getElementById("tempsRose").value = temps;
    }, 10);
}
 
function translationAleatoireX1() {
    let translationAleatoire1 = (Math.floor(Math.random() * 200) + 1);
    return translationAleatoire1;
}
 
function translationAleatoireX2() {
    let translationAleatoire2 = (Math.floor(Math.random() * 200) + 1);
    return translationAleatoire2;
}
 
 
function deplacerVoiture1() {
    let voiture1 = document.getElementById("voiture1");
    translationX1 = Math.min(translationX1 + translationAleatoireX1(), maxTranslationX);
    voiture1.style.marginLeft = translationX1 + "px";
 
    if (translationX1 >= maxTranslationX) {
        clearInterval(intervalDeplacement1);
        clearInterval(intervalChrono1);
        document.getElementById("fin").innerHTML = "BRAVO!";
    }
}
 
function deplacerVoiture2() {
    let voiture2 = document.getElementById("voiture2");
    translationX2 = Math.min(translationX2 + translationAleatoireX2(), maxTranslationX);
    voiture2.style.marginLeft = translationX2 + "px";
 
    if (translationX2 >= maxTranslationX) {
        clearInterval(intervalDeplacement2);
        clearInterval(intervalChrono2);
        document.getElementById("fin").innerHTML = "BRAVO!";
    }
}