<?php

 
 if(isset($_POST['enviar']) && $_POST['mensaje'] && $_POST['usuario']){

  $mensajes=$_POST['mensaje'];
  $_POST['usuario'];
    $con = new PDO('mysql:host=localhost;dbname=forochat2', 'root','');

    $con->query("SET NAMES utf8");

    $res= "INSERT INTO mensajes (`id`, `usuario`, `mensaje`,`fechahora`) VALUES (NULL,'${_POST["usuario"]}', '${_POST["mensaje"]}',NOW())";
      $respuesta= $con->exec($res);
  
    echo "OK";

 }

?>