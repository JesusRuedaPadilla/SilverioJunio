function cargarMensajes(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            document.getElementById("mensaje").innerHTML=ajax.responseText;
        }
    }
    ajax.open("GET","fichero.txt");
    ajax.send();
}

window.addEventListener("load",function(){

    document.getElementsByTagName("button")[0].onclick=cargarMensajes;
    window.setInterval(cargarMensajes,4000);
});

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

window.addEventListener("load",function(){

    // document.getElementsByTagName("button")[0].onclick=cargarMensajes;
    window.setInterval(cargarHora,1000);
});


