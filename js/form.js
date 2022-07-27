const contacto = [];

let formulario = document.getElementById("formulario");
let nombre= document.getElementById("full-name");
let correo = document.getElementById("email");
let consulta = document.getElementById("abstract");

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    Toastify({
        text: "Formulario completado, ¡muchas gracias!",
        className: "toastify",
        duration: 3000,
    }).showToast();


const contactos = {
    nombre: nombre.value,
    email: correo.value,
    consulta : consulta.value,
};

const contJSON =  JSON.stringify(contactos);
console.dir(contJSON);

contacto.push(contactos);

console.dir(contacto);

sessionStorage.setItem('Nombre', nombre.value);
sessionStorage.setItem('Email', correo.value);
sessionStorage.setItem('Consulta', consulta.value);


emailjs.send("service_c5g75jb","template_kpx2u6o",{
    from_name: contactos.nombre,
    to_name: "KreviskyAutos",
    message: contactos.consulta,
    reply_to: contactos.email,
    });


setTimeout(function() {
window.location.replace('exito.html');
}, 1500);


});





