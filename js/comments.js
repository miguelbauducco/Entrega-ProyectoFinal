//UTILIZACION DE FETCH

const clienteName = document.getElementById("clientename");

const h5Element = document.createElement("h5");

let nombre;

function traerCliente(){

    fetch("https://rickandmortyapi.com/api/character/2")
    .then ( (response) =>
    response.json()
    )
    .then ((json) => console.log(json.name));

    h5Element.innerHTML = JSON.name;

}

traerCliente();


clienteName.append(h5Element);
