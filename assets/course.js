let voiture1 = document.getAnimations("voiture1");
let voiture2 = document.getElementById("voiture2");
let translationX1;
let translationX2;
let voiture1Width;
let voiture2Width;
let compteARebours;


function compteARebours() {
    /* 
        Affiche un compte à rebours, démarrant à 3 et se terminant à 0, pour le lancement de la course.
    */
}

function chronometre() {
    /* 
        Deux chronomètres sont utilisés pour mesurer le temps de chaque voiture lorsqu'elle atteint la ligne d'arrivée.
    */
}

function aleatoireTranslationX() {
    /* 
        I. Génère une valeur aléatoire de translation horizontale pour une voiture en fonction de la
        largeur du conteneur et des voitures.

        II. Calculer la valeur maximale de déplacement horizontal (maxTranslationX) en so0ustrayant la
        largeur de la voiture (voiture1Width) de la largeur du conteneur (containerWidth).

        III. Utiliser Math.random() pour générer un nombre décimal pseudo-aléatoire entre 0 et
        maxTranslationX.

        IV. Multipliez ce nombre par maxTranslationX pour obtenir une translation horizontale
        aléatoire.


        V. Utilisez Math.floor() pour arrondir ce nombre à l'entier inférieur le plus proche et le
        retourner.
    */
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

function demarrerCourse() {

}
