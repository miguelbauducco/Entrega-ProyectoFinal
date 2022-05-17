<?php

$nombre = $_POST['name'];

$mail = $_POST['email'];

$consulta = $_POST['consulta'];


// cuerpo de recepcion de mensaje//

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . "\r\n";
$mensaje .= "Mensaje: " . $_POST['consulta'] . "\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = 'miguel.bau14@gmail.com';
$asunto = 'Consultas Krevisky Autos';

//funcion mail//

mail($destinatario,$asunto, utf8_decode($mensaje), $header)

//redireccion

header('Location:exito_html');


