
// function cargarMensajes(){
//     var ajax=new XMLHttpRequest();
//     ajax.onreadystatechange=function(){
//         if(ajax.readyState==4 && ajax.status==200){
//             document.getElementById("mensaje").innerHTML=ajax.responseText;
//         }
//     }
//     ajax.open("GET","fichero.txt");
//     ajax.send();
// }

function cargarMensajes(){

  fetch("fichero.txt")
    .then(x=>x.text())
    .then(y=>document.getElementById("mensaje").innerHTML=y)

}

function cargarHora(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            document.getElementById("hora").innerHTML=ajax.responseText;
        }
    }
    ajax.open("GET","hora.php");
    ajax.send();
}



// function cargarAlumnos(){
//     var ajax=new XMLHttpRequest();
//     ajax.onreadystatechange=function(){
//         if(ajax.readyState==4 && ajax.status==200){
//             var vector=JSON.parse(ajax.responseText);
//             vector=vector.sort();
//             var listado= document.getElementById("listado");
//             listado.innerHTML="";

//             for(let i=0;i<vector.length;i++){
//                 var li=document.createElement("li");
//                 li.innerHTML=vector[i];
//                 listado.appendChild(li);
//             }
//         }
//     }
//     ajax.open("GET","listadoAlumnos.txt");
//     ajax.send();
// }

function cargarAlumnos(){
 fetch("listadoAlumnos.txt")
    .then(respuesta=>respuesta.json())
    .then(vector=>{
        vector.sort();
        var listado= document.getElementById("listado");
        listado.innerHTML="";
        
        for(let i=0;i<vector.length;i++){
            var li=document.createElement("li");
            li.innerHTML=vector[i];
            listado.appendChild(li);
        }
    })
}

window.addEventListener("load",function(){

    document.getElementsByTagName("button")[0].onclick=cargarMensajes;
    window.setInterval(cargarMensajes,4000);
    window.setInterval(cargarHora,1000);
    window.setInterval(cargarAlumnos,5000);
});

// Ejercicio para jueves 7 abril 2022

// 3 documentos, el primero index.html-> estructura por dentro (mirar foto)
//en el servidor 2 paginas web, la primera guarda.php y la otra lee.php
//cuando en index.html pulses enviar se va a guarda.php y se mete en ese fichero y lo guarda en la tabla de BD (campo mensaje)
// la respuesta que viene es OK y sino respuesta error .

//ajax asociado a boton de enviar y cuando pulses si es OK te hace todo
//cada 2 segundos accedemos a lee.php (en lee.php encontramos <div>mensaje1</div> <div>mensaje2</div> , etc)

