<?php

    $con = new PDO('mysql:host=localhost;dbname=forochat2', 'root','');

   $con->query("SET NAMES utf8");
    $res= $con->query("select * from mensajes");
 
        
    $registro = $res->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($registro);


?>