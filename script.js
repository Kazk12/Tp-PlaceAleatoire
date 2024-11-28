const ajoutez = document.querySelector("#ajoute");
const terminer = document.querySelector("#termine");
ajoutez.addEventListener("click", handleAjoutez);
// terminer.addEventListener('click', handleTerminer);

const apprenants = [];

// Fonction pour ajouter un prénom à la liste
function handleAjoutez() {
  const name = document.querySelector("#name");
  
  // Ajouter le prénom à la liste
//   Trim permet de pas mettre d'espace dans le prénom
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
      <div class="apprenant flex">
        <p class="cinq">${i + 1}. ${apprenants[i]}</p>
        ${
          apprenants[i + 1] 
            ? `<p class="cinq">${i + 2}. ${apprenants[i + 1]}</p>` 
            : ""
        }
      </div>
    `;
  }

  // Vérifier si la section #Listes existe déjà, sinon la créer
  let sectionListes = document.querySelector("#Listes");
  if (!sectionListes) {
    // Si la section n'existe pas, on la crée
    sectionListes = document.createElement("section");
    sectionListes.id = "Listes";
    document.body.appendChild(sectionListes);
  }

  // Mettre à jour la section #Listes
  sectionListes.innerHTML = `
    <div id="Liste" class="wrap cent">
      <h2>Liste des Apprenants :</h2>
      ${contenuHTML}
      <div class="flex">
        <a href="#" id="Prime" class="btn modifier">Modifier</a>
        <a href="#" id="Finito" class="btn terminer-btn">Terminer</a>
      </div>
    </div>
  `;
}
