
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


