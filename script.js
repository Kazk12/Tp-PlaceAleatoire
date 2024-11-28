const ajoutez = document.querySelector('#ajoute');
const terminer = document.querySelector('#termine');
ajoutez.addEventListener('click', Handleajoutez);
terminer.addEventListener('click', Handleterminer);

function Handleajoutez(){
const name = document.querySelector('#name')
// console.log(name.value)
apprenants.push(name.value)
name.value = "";

console.log(apprenants)
const apprenants = [];

function Handleajoutez() {
    const name = document.querySelector('#name');
    apprenants.push(name.value);
    name.value = "";  // Effacer le champ de saisie après ajout
    console.log(apprenants);
}

function Handleterminer() {
    const formulaire = document.querySelector('#form');
    formulaire.classList.add("none");

    // Vérifier si la classe "none" est présente après l'ajout
    if (formulaire.classList.contains("none")) {
        console.log("La classe 'none' est présente.");
        
        // Créer une variable pour stocker le contenu HTML généré
        let contenuHTML = '';

        // Générer le contenu de la liste des apprenants, 2 par ligne
        for (let i = 0; i < apprenants.length; i += 2) {
            // Afficher 2 noms par ligne, donc nous prenons deux apprenants à chaque fois
            contenuHTML += `<div class="apprenant flex">
                <p class="cinq">${i + 1}. ${apprenants[i]}</p>
                ${apprenants[i + 1] ? `<p class="cinq">${i + 2}. ${apprenants[i + 1]}</p>` : ''}
            </div>`;
        }

        // Ajouter le contenu généré au body
        const body = document.querySelector("body");
        body.innerHTML += `<div class="wrap cent">
            <h2>Liste des Apprenants :</h2>
            ${contenuHTML}
            <div class="flex">
                <a href="#" class="btn modifier">Modifier</a>
                <a href="#" class="btn terminer-btn">Terminer</a>
            </div>
        </div>`;
    }
}
}