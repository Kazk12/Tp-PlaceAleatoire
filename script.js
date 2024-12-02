const ajoutez = document.querySelector("#ajoute");
const terminer = document.querySelector("#termine");

let newX = 0, newY =0, startX = 0, startY = 0;

ajoutez.addEventListener("click", handleClickAjoutezApprenants);
terminer.addEventListener('click', handleClickTerminer);

const audio = document.querySelector("#sons") // Assurez-vous que le fichier audio est à la bonne adresse



const apprenants = [];

// Fonction pour ajouter un prénom à la liste
function handleClickAjoutezApprenants() {
  const name = document.querySelector("#name");
  
  // Ajouter le prénom à la liste
  // Trim permet de pas mettre d'espace dans le prénom
  if (name.value.trim() !== "") {
    apprenants.push(name.value);
  }
  
  // Effacer le champ de saisie après l'ajout
  name.value = ""; 
  
  // Mettre à jour la liste dans le HTML
  updateListe();
}

// Fonction pour générer dynamiquement la liste d'apprenants
function updateListe() {
  let contenuHTML = "";
  
  // Générer le contenu de la liste des apprenants, 2 par ligne
  for (let i = 0; i < apprenants.length; i += 2) {
    // Afficher 2 prénoms par ligne
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



  // Vérifier si la section #Listes existe déjà, sinon la créer
  let sectionListes = document.querySelector("#Listes");
  if (!sectionListes) {
    let Tout = document.querySelector("#Tout")

    // Si la section n'existe pas, on la crée
    sectionListes = document.createElement("article");
    sectionListes.id = "Listes";
    sectionListes.classList = "quatre alignCenter"
    Tout.appendChild(sectionListes);
  }

  // Mettre à jour la section #Listes
  sectionListes.innerHTML = `
    <div class="wrap cent">
      <h2 class="textCentre">Liste des Apprenants :</h2>
      ${contenuHTML}
      <div class="flex">
        <a href="#" id="Prime"  class="btn modifier">Supprimer</a>
        <a href="#" id="Finito" class="btn terminer-btn">Tout supprimer</a>
      </div>
    </div>
  `;
  document.querySelector("#Prime").addEventListener("click", handleClickSupprimer);

  document.querySelector("#Finito").addEventListener("click", ToutSupprimer)

}


function handleClickSupprimer(){
  apprenants.splice(-1, 1)
  updateListe();
}

function ToutSupprimer(){
  apprenants.length = 0;
  updateListe();
}




function handleClickTerminer (){
  audio.play();

  // Ajoutez ici votre code pour gérer la logique de "Terminer"
  console.log("Le bouton 'Terminer' a été cliqué.");

  let Tout = document.querySelector("#Tout");
  Tout.classList.remove("random");
  Tout.classList.add("none");
if(Tout.classList.contains("none")){

  let contenuHTMLTables = "";
  
  // Générer le contenu de la liste des apprenants, 2 par ligne
  for (let i = 0; i < apprenants.length; i += 1) {
    // Afficher 2 prénoms par ligne
    contenuHTMLTables += `
      <div class="Table alignCenter trois ChaqueTable JustifyCentre">

        <p class="Toi"></p> 
      </div>
    `;


    let Tables = document.querySelector("#Tables");
    if (!Tables) {
  
      // Si la section n'existe pas, on la crée
      Tables = document.createElement("section");
      Tables.id = "Tables";
      Tables.classList = "textCentre cent"
      document.body.appendChild(Tables);
    }




 // Mettre à jour la section #Tables
 Tables.innerHTML = `
   <h2>Les tables :</h2>
   <div class="Center">
    <a id="Genere" class="Genere">Genere</a>
   </div>
 <article id="table" class="RetourLigne">
   ${contenuHTMLTables}
 </article>
`;

  }

  

  const BoutonGenere = document.querySelector("#Genere");

  BoutonGenere.addEventListener("click", handleClickGenerePrenom)
// handleClickGenerePrenom();


}

}
let TableauNom = "";


function handleClickSon(){

}

function handleClickGenerePrenom(){
 const ToutesLesTables = document.querySelectorAll(".ChaqueTable");
 TableauNom = apprenants
 TableauRandom(TableauNom)
 ToutesLesTables.forEach((Table, index) => {
  // console.log(document.querySelectorAll(".Toi"))
  Table.querySelector(".Toi").innerText = TableauNom[index]

 })
 
}



function TableauRandom(Tableau){


  for (i = Tableau.length - 1 ; i >= 0 ; i--) {
  const NumeroRandom = Math.floor(Math.random() * (i +1));
    Tableau.push(Tableau[NumeroRandom])
    Tableau.splice(NumeroRandom, 1);

  }

  return Tableau
}




function initaliserBougerLesTables() {
  
    
  const ChaqueTable = document.querySelectorAll(".ChaqueTable");
  // ChaqueTable.forEach((Table) => {
  //   Table.addEventListener("mousedown", handleMouseDownTable);
  // }) 
  document.addEventListener ("mousedown", handleMouseDownTable);  
  
} 

let TableQuiBouge

function handleMouseDownTable(event){
startX = event.clientX;
startY = event.clientY;

document.addEventListener("mousemove", handleMouseMoveTable);

TableQuiBouge = event.target

document.addEventListener("mouseup", handleMouseUpTable);
}

function handleMouseMoveTable (event){
newX = startX - event.clientX;
newY = startY - event.clientY;

startX = event.clientX;
startY = event.clientY;

TableQuiBouge.style.top = (TableQuiBouge.offsetTop - newY) + "px";
TableQuiBouge.style.left = (TableQuiBouge.offsetLeft - newX) + "px";

}

function handleMouseUpTable(event){
// console.log("ohhh");

document.removeEventListener("mouseup", handleMouseUpTable)
document.removeEventListener("mousemove", handleMouseMoveTable);

}
initaliserBougerLesTables()