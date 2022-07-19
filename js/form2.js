
//MENSAJE DE EXITO CON NOMBRE DE USUARIO


function cartel(){

let divCliente = document.getElementById("cliente");

let h2Element = document.createElement("h2");

let nombreCartel = sessionStorage.getItem('Nombre');

h2Element.innerText = `Gracias por tu consulta, ${nombreCartel}`;

divCliente.append(h2Element);

}

cartel();