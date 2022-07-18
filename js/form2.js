
//MENSAJE DE EXITO CON NOMBRE DE USUARIO

let divCliente = document.getElementById("cliente");
let h2Element = document.createElement("h2");
let nombreCartel = sessionStorage.getItem('nombre');
h2Element.innerText = "Gracias por tu consulta, "+ console.log(nombreCartel);

divCliente.append(h2Element);