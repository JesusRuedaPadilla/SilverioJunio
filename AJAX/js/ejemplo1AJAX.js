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
