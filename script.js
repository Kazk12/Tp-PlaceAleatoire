const ajoutez = document.querySelector('#ajoute');
const terminer = document.querySelector('#termine');
ajoutez.addEventListener('click', Handleajoutez);
terminer.addEventListener('click', Handleterminer);
console.log(terminer)
const apprenants = []

function Handleajoutez(){
const name = document.querySelector('#name')
// console.log(name.value)
apprenants.push(name.value)
name.value = "";

console.log(apprenants)

}

function Handleterminer(){
const formulaire = document.querySelector('#form');
    formulaire.classList.add("none")
    
}


if(document.querySelector('#form').classList.contains("none")){
console.log(document.querySelector('#form').classList.contains("none"))

// const body = document.querySelector("body")
// body.innerHTML += `<p>${apprenants.forEach((apprenant) => {
//     apprenant
// })}</p>`
}


