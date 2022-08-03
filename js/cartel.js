
//MENSAJE DE EXITO CON NOMBRE DEL CLIENTE QUE LLENO EL FORMULARIO  


function cartel(){

let divCliente = document.getElementById("cliente");

let h2Element = document.createElement("h2");

let nombreCartel = sessionStorage.getItem('Nombre');

h2Element.innerText = `Gracias por tu consulta, ${nombreCartel}`;

divCliente.append(h2Element);


}

cartel();

