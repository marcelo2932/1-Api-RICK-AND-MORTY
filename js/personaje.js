const nameCharacter = document.querySelector('h4');
const imgCard = document.querySelector('img');
const cardText = document.querySelector('.card-text');
const parrafoGenero = document.querySelector('.genero');
const parrafoLocation = document.querySelector('.location');
const footerCard = document.querySelector('.card-footer');

//const formData = document.querySelector('#formData') 
// llamado desde un ID

const parametro = window.location.search;
console.log(parametro);

const urlParams = new URLSearchParams(parametro);
let id = urlParams.get('id');

const getCharacterById = async(id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = response.json();

    return data;
} 

getCharacterById(id).then(data => {
    nameCharacter.innerText = data.name;
    imgCard.src = data.image;
    footerCard.innerText = data.status;
    if (data.status === 'Alive') {
        footerCard.classList.add('green');
    }else if (data.status === 'Dead') {
        footerCard.classList.add('Red');
    }else {
        footerCard.classList.add('yellow');
    }

    cardText.innerText = "Specie: " + data.specie;
    parrafoGenero.innerText = "Gender: " + data.gender;
    parrafoLocation.innerText = "Location: " + data.location.name;
})  .catch(err => err);






