//UTILIZACION DE FETCH

const clienteName1 = document.getElementById("clientename1");
const clienteName2 = document.getElementById("clientename2");
const clienteName3 = document.getElementById("clientename3");

const h5Element1 = document.createElement("h5");
const h5Element2 = document.createElement("h5");
const h5Element3 = document.createElement("h5");


function traerCliente1(){

    fetch("https://rickandmortyapi.com/api/character/2")
    .then ( (response) =>
    response.json()
    )
    .then ((json) => h5Element1.innerHTML = (json.name));

}



function traerCliente2(){

    fetch("https://rickandmortyapi.com/api/character/168")
    .then ( (response) =>
    response.json()
    )
    .then ((json) => h5Element2.innerHTML = (json.name));

}



function traerCliente3(){

    fetch("https://rickandmortyapi.com/api/character/172")
    .then ( (response) =>
    response.json()
    )
    .then ((json) => h5Element3.innerHTML = (json.name));

}


traerCliente1();
traerCliente2();
traerCliente3();




clienteName1.append(h5Element1);
clienteName2.append(h5Element2);
clienteName3.append(h5Element3);


