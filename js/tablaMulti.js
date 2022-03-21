function mostrarTabla (){
    var numero=document.getElementById("numero").value;
    if(numero!=""){
        //isNaN si es un numero devuelve false
        // isNaN es verdadero cuando lo que hay dentro no es un numero
        var tabla=document.createElement("table");

      
        for(let i=1;i<=10;i++){
            var tr=document.createElement("tr");
            
            var td=document.createElement("td");

            tr.appendChild(td);
            td.innerHTML= numero;
            tabla.appendChild(tr);

            var td=document.createElement("td");
            tr.appendChild(td);
            td.innerHTML= "x";
            tabla.appendChild(tr);

        
            var td=document.createElement("td");
            tr.appendChild(td);
            td.innerHTML= i;
            tabla.appendChild(tr);

            var td=document.createElement("td");
            tr.appendChild(td);
            td.innerHTML= "=";
            tabla.appendChild(tr);

            var td=document.createElement("td");
            tr.appendChild(td);
            td.innerHTML= numero*i;
            tabla.appendChild(tr);
            
            if(i%2==0){
                tr.style.color="blue";
                // tr.style.backgroundColor="red";
            }
            else{
                tr.style.color="red";
                // tr.style.backgroundColor="blue";
            }
        
        }
        var pantalla=document.getElementById("pantalla");
        pantalla.innerHTML="";
        pantalla.appendChild(tabla);

    }
}

window.onload=function(){
    var boton=document.getElementById("boton");

    boton.onclick=mostrarTabla;

}

function ClonarDiv() { 
    var a=document.getElementsByTagName("div")[1];
    a.parentElement.appendChild(a.cloneNode(true));
    a.children[0].setAttribute("id",a.children[0].getAttribute("id")+1);
    a.children[1].setAttribute("id",a.children[1].getAttribute("id")+1);
 }