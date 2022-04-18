function rellenarModelo(id,usuario,mensaje,hora,modelo){  

    var copia=modelo.cloneNode(true);
    copia.children[0].innerHTML=hora;
    copia.children[0].setAttribute("data-ultimo",id);
    copia.children[1].innerHTML=usuario;
    copia.children[2].innerHTML=mensaje;

    return copia;

}

function traerMensajes(modelo,contenedor){

    return function(){
        var ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200){
                var mensajes=JSON.parse(ajax.responseText);
                mensajes.reverse();
                contenedor.innerHTML="";
                for(let i=0;i<mensajes.length;i++){
                    contenedor.appendChild(rellenarModelo(
                        mensajes[i].id,
                        mensajes[i].usuario,
                        mensajes[i].mensaje,
                        mensajes[i].fechahora,
                        modelo))
                }
            }
        }
        ajax.open("GET","php/lee.php");
        ajax.send();
    }

}

window.addEventListener("load",function(){

    var cajaTexto=document.getElementById("texto");

    var boton=document.getElementById("enviar");

    var contenedor=document.getElementById("contenedor");

    //Creamos el modelo 
    var contenedorModelo = document.createElement("div");
    contenedorModelo.appendChild(contenedor.children[0]);

    modelo= contenedorModelo.children[0];


    var temp=window.setInterval(traerMensajes(modelo,contenedor),3000);


});







//Carlos

function rellenarModelo(id,usuario,hora,mensaje,modelo){
    var copia=modelo.cloneNode(true);
    copia.children[0].innerHTML=hora;
    copia.children[0].setAttribute("data-ultimo",id);
    copia.children[1].innerHTML=usuario;
    copia.children[2].innerHTML=mensaje;
    return copia;

}

function traerMensaje(modelo,contenedor){
    return function(){
        var ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200){
                var mensajes=JSON.parse(ajax.responseText);
                mensajes.reverse();
                contenedor.innerHTML="";
                for(let i=0; i<mensajes.length; i++){
                    contenedor.appendChild(rellenarModelo(mensajes[i].id, mensajes[i].usuario, mensajes[i].fechahora, mensajes[i].mensaje, modelo));
                }
            }
        }
        ajax.open("GET","leer.php");
        ajax.send();
    }
}

function enviarMensaje(cajaUsuario, cajaTexto){
    return function(ev){
        ev.preventDefault();
        var ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status==200){
                if(ajax.responseText=="OK"){
                    cajaTexto.value="";
                    cajaTexto.focus();
                }else{
                    alert("El mensaje no se ha podido insertar");
                }
            }
        }
        ajax.open("GET","guardar.php?usuario="+cajaUsuario.value+"&mensaje="+cajaTexto.value);
        ajax.send();
    }
}

window.addEventListener("load", function(){

    var cajaUsuario=document.getElementById("usuario");
    var cajaTexto=document.getElementById("texto");
    var boton=document.getElementById("enviar");
    var contenedor=document.getElementById("contenedor");

    //creo el modelo
    var contenedorModelo=document.createElement("div");
    contenedorModelo.appendChild(contenedor.children[0]);
    var modelo=contenedorModelo.children[0];

    boton.onclick=enviarMensaje(cajaUsuario,cajaTexto);
    var temp=this.window.setInterval(traerMensaje(modelo,contenedor),3000);
    
})