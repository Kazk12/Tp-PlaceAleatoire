const ajoutez = document.querySelector("#ajoute");
const terminer = document.querySelector("#termine");

let newX = 0, newY =0, startX = 0, startY = 0;

ajoutez.addEventListener("click", handleClickAjoutezApprenants);
document.querySelector("#name").addEventListener("keypress", handleKeyPressEnter);
terminer.addEventListener('click', handleClickTerminer);
document.querySelector("#LaSave").addEventListener("click", handleClickStockLaListe);


function handleKeyPressEnter(event){

  if (event.keyCode === 13) {

    handleClickAjoutezApprenants();
    
  }
}





let apprenants = [];

// Cette fonction permet d'ajouter un prénom dans le tableau apprenants
function handleClickAjoutezApprenants() {
  const name = document.querySelector("#name");
  
  // Ajouter le prénom à la liste
  // Trim permet de pas mettre d'espace dans le prénom (par exemple :         Test   => Resultat :Test)
  if (name.value.trim() !== "") {
    apprenants.push(name.value);
  }
  
 
  // Quand on écrit un prénom et qu'on l'ajoute, le texte du prénom est directement supprimer pour qu'on note le suivant.
  name.value = ""; 
  
  // A chaque fois qu'on ajoute un nom, il y a le nom dans la liste d'apprenant qui apparaît directement (mettre à jour la liste directement)
  updateListe();
}

// Fonction pour générer la liste d'apprenants dynamiquement(c'est par rapport au prénom qu'on ajoute)
function updateListe() {
  let contenuHTML = "";
  
  // Permet de crée le contenu html en fonction du nombre d'apprenants
  for (let i = 0; i < apprenants.length; i += 2) {
    contenuHTML += `
      <div class="apprenant">
        <p class="cinq">${i + 1}. ${apprenants[i]}</p>
        ${apprenants[i + 1] ? `<p class="cinq">${i + 2}. ${apprenants[i + 1]}</p>` 
            : ""
        }
      </div>
    `;
  }
  // Le ? permet de vérifier la condition juste avant lui et d'appliquer la valeur juste après lui
  // Le : permet de faire ce qu'il y a juste après lui si la condition n'est pas vérifier



  // Crée articleListes si il existe dans le document
  let articleListes = document.querySelector("#Listes");

// Si articleListes n'existe pas alors on va la crée

  if (!articleListes) {
    let Tout = document.querySelector("#Tout")

    // Si la section n'existe pas, on la crée
    articleListes = document.createElement("article");
    articleListes.id = "Listes";
    articleListes.classList = "quatre alignCenter"
    Tout.appendChild(articleListes);
  }

  // Mettre à jour la section #Listes, pour chaque prénom qui est ajouter
  articleListes.innerHTML = `
    <div class="wrap cent">
      <h2 class="textCentre">Liste des Apprenants :</h2>
      ${contenuHTML}
      <div class="flex">
        <a href="#" id="Prime"  class="btn modifier">Supprimer</a>
        <a href="#" id="Storage" class="btn">Save</a>
        <a href="#" id="Finito" class="btn terminer-btn">Tout supprimer</a>

      </div>
    </div>
  `;

document.querySelector("#Storage").addEventListener("click", handleClickSaveStorage);
  // Mise en place d'un eventListener sur les bouton afin de supprimer les prénoms
  document.querySelector("#Prime").addEventListener("click", handleClickSupprimer);

  document.querySelector("#Finito").addEventListener("click", ToutSupprimer)

}





// Fonction pour sauvegarder dans le localStorage
function handleClickSaveStorage() {
  // Sauvegarde de la variable apprenants dans le localStorage
  localStorage.setItem("Students", JSON.stringify(apprenants));  // Convertir en chaîne JSON

}

// Fonction pour charger depuis le localStorage
function handleClickStockLaListe() {
  // Récupérer les données du localStorage
  const PrenomApprenantsStocker = localStorage.getItem("Students");

  // Si des données existent dans le localStorage
  if (PrenomApprenantsStocker) {
    apprenants = JSON.parse(PrenomApprenantsStocker);  // Convertir la chaîne JSON en tableau ou objet
  } else {
    console.log("Aucune donnée trouvée dans le localStorage.");
  }
  updateListe()
}




// Les functions qui permettent de supprimer les prénoms
function handleClickSupprimer(){
  
  apprenants.splice(-1, 1)
  updateListe();
}

function ToutSupprimer(){
  apprenants.length = 0;
  updateListe();
}


// Fonction quand on appuie sur le bouton Terminer afin de générer les tables et de faire disparaître la section à l'id Tout (qui fait disparaître la div ajout d'apprenant et la liste)

function handleClickTerminer (){
 

  // Ajoutez ici votre code pour gérer la logique de "Terminer"
  
  let Tout = document.querySelector("#Tout");
  Tout.classList.remove("random");
  Tout.classList.add("none");

// Si la section à l'id Tout contient la classe "none" alors on va générer les tables 


if(Tout.classList.contains("none")){

  let contenuHTMLTables = "";
  
  // Crée la structure html depuis js et de générer les tables par rapport à la longueur du tableau d'apprenants
  for (let i = 0; i < apprenants.length; i += 1) {
    contenuHTMLTables += `
      <div class="Table alignCenter trois ChaqueTable JustifyCentre">

        <p class="Toi"></p> 
      </div>
    `;


    let Tables = document.querySelector("#Tables");


    // Si l'id Tables n'existe pas alors on va la crée
    if (!Tables) {
  
      Tables = document.createElement("section");
      Tables.id = "Tables";
      Tables.classList = "textCentre cent"
      // Tables devient donc un enfant de body
      document.body.appendChild(Tables);
    }




 // Mettre à jour la section Tables, on va donc crée la structure html de la section et on va y ajouter les tables qui sont générer dynamiquement par rapport à la longueur du tableau apprenants
 Tables.innerHTML = `
   <h2>Les tables :</h2>
   <div class="Center">
    <a id="Genere" class="Genere">Genere</a>
   </div>
 <article id="table" class="RetourLigne">
   ${contenuHTMLTables}
 </article>
`;

document.querySelectorAll(".ChaqueTable").forEach((table, index) =>{
  table.style.left = (5 + (index*6)) + "vw"
} )

  }

// Ici on récupère l'élément Genere de la section à l'id Tables afin de lui ajouter un event qui va permettre de mettre les prénoms directement dans les différentes tables générer aléatoirement. 

const BoutonGenere = document.querySelector("#Genere");


BoutonGenere.addEventListener("click", handleClickGenerePrenom)


}

}

// On crée un tableau vide afin de stocker les différents prénoms

let TableauNom = [];


function handleClickSon(){

}

function handleClickGenerePrenom(){
  // On récupère toutes les tables
 const ToutesLesTables = document.querySelectorAll(".ChaqueTable");

//  TableauNom chope toutes les valeurs d'apprenants à chaque fois qu'on génére des prénoms
 TableauNom = apprenants

//  On utilise la fonction TableauRandom sur TableauNom
 TableauRandom(TableauNom)

//  Pour chaque table on ajoute le texte dans le p qui est TableauNom à la position index
 ToutesLesTables.forEach((Table, index) => {
  Table.querySelector(".Toi").innerText = TableauNom[index]
 })
}

// La fonction TableauRandom permet d'avoir en paramètre un Tableau afin de faire le random dessus

function TableauRandom(Tableau){


  for (i = Tableau.length - 1 ; i >= 0 ; i--) {
    // On crée une constante qui va stocker aléatoirement dans la longueur du tableau un index
  const NumeroRandom = Math.floor(Math.random() * (i +1));
  // On push dans le Tableau la valeur aléatoire qu'on a eu avec le Tableau à l'index NumeroRandom(la valeur va être à la finn du tableau)
    Tableau.push(Tableau[NumeroRandom])
    // On enleve dans le Tableau l'ancienne valeur qui était par exemple à la position 2 et va donc ce retrouver à la dernière position du Tableau
    Tableau.splice(NumeroRandom, 1);

  }

  // On récupère la valeur du Tableau
  return Tableau
}



// On crée la fonction qui permet de faire le drag and drop
function initaliserBougerLesTables() {
  document.addEventListener ("mousedown", handleMouseDownTable);
} 




function handleMouseDownTable(event){

  // StartX prend la position d'ou ce trouve la souris sur l'axe X
startX = event.clientX;

  // StartY prend la position d'ou ce trouve la souris sur l'axe Y

startY = event.clientY;

document.addEventListener("mousemove", handleMouseMoveTable);


// TableQuiBouge prend par exemple ici la table qu'on veut bouger(comme son nom quoi)
TableQuiBouge = event.target

document.addEventListener("mouseup", handleMouseUpTable);
}

function handleMouseMoveTable (event){

// newX et newY prennent les anciennes valeurs de l'event.clientX/Y et les soustraits par la nouvelle valeur des event.clientX/Y
newX = startX - event.clientX;
newY = startY - event.clientY;


// On donne les nouvelles valeurs pour startX et startY sinon on pourra pas faire bouger les tables car on modifie jamais leurs valeurs donc les 2 valeurs juste au dessus ne vont pas avoir le bon comportement
startX = event.clientX;
startY = event.clientY;


// On ajoute le style qui permet de faire bouger les tables en fonction du décalage en rapport de la souris 
TableQuiBouge.style.top = (TableQuiBouge.offsetTop - newY) + "px";
TableQuiBouge.style.left = (TableQuiBouge.offsetLeft - newX) + "px";

}


// On crée la fonction qui permet de retirer les evenements 
function handleMouseUpTable(){
document.removeEventListener("mouseup", handleMouseUpTable)
document.removeEventListener("mousemove", handleMouseMoveTable);
}
initaliserBougerLesTables()


