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
    <a id="SaveTables" class ="Genere">Save</a>
    <a id="Genere" class="Genere">Genere</a>
    <a id="GenereTables" class ="Genere">UtilserLaSave</a>
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
const SaveTables = document.querySelector("#SaveTables");
const GenereTables = document.querySelector("#GenereTables");


BoutonGenere.addEventListener("click", handleClickGenerePrenom)
SaveTables.addEventListener("click", saveTablePositions);
GenereTables.addEventListener("click", restoreTablePositions);



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



 restoreTablePositions();
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





let TableQuiBouge = null; // Table qui est en cours de déplacement


// Fonction pour démarrer le mouvement de la table
function handleMouseDownTable(event) {
  // Vérifier si l'élément cliqué est bien une table
  TableQuiBouge = event.target.closest(".ChaqueTable");

  if (TableQuiBouge) {
    startX = event.clientX; // Initialiser la position X
    startY = event.clientY; // Initialiser la position Y

    // Ajout des écouteurs pour déplacer la table et arrêter le mouvement
    document.addEventListener("mousemove", handleMouseMoveTable);
    document.addEventListener("mouseup", handleMouseUpTable);
  }
}

// Fonction pour déplacer la table
function handleMouseMoveTable(event) {
  if (TableQuiBouge) {
    // Calcul des nouvelles positions en fonction du déplacement de la souris
    newX = startX - event.clientX;
    newY = startY - event.clientY;

    startX = event.clientX; // Mise à jour des positions de départ
    startY = event.clientY;

    // Déplacer la table avec les propriétés 'left' et 'top'
    TableQuiBouge.style.left = (TableQuiBouge.offsetLeft - newX) + "px";
    TableQuiBouge.style.top = (TableQuiBouge.offsetTop - newY) + "px";
  }
}

// Fonction pour arrêter le mouvement de la table
function handleMouseUpTable() {
  // Retirer les écouteurs d'événements pour arrêter le mouvement
  document.removeEventListener("mousemove", handleMouseMoveTable);
  document.removeEventListener("mouseup", handleMouseUpTable);

  // Sauvegarder les nouvelles positions de la table dans le localStorage
  saveTablePositions();
}

// Ajouter un événement 'mousedown' pour activer le déplacement des tables
function initaliserBougerLesTables() {
  document.addEventListener("mousedown", handleMouseDownTable);
}

initaliserBougerLesTables(); // Initialiser le drag and drop





function saveTablePositions() {
  const tables = document.querySelectorAll(".ChaqueTable");
  const positions = [];

  tables.forEach(table => {
    const position = {
      top: table.offsetTop,
      left: table.offsetLeft
    };
    positions.push(position);
  });

  // Affiche les positions pour vérifier
  console.log(positions);
  localStorage.setItem("tablePositions", JSON.stringify(positions));
}



function restoreTablePositions() {
  const positions = JSON.parse(localStorage.getItem("tablePositions"));

  if (positions) {
    const tables = document.querySelectorAll(".ChaqueTable");

    positions.forEach((position, index) => {
      if (tables[index]) {
        tables[index].style.top = position.top + "px";
        tables[index].style.left = position.left + "px";
      }
    });
  }
}




