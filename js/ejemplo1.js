// Ejercicio inicio de la recuperacion hasta junio
//Toma Contacto DOM

function cambiarContenido(contenido){
    // var h1=document.getElementsByTagName("h1")[0]; // Pilla el h1 (el primero)
    // var h1=document.getElementById("titulo"); // Pilla el id titulo
    // var h1=document.getElementsByClassName("informacion")[0]; // Pilla el class informacion (el primero)
    var h1=document.querySelector("h1"); //Selector css
    h1.innerHTML=contenido;
    h1.style.color="red";
    h1.style.fontSize="90px";
    h1.style.backgroundColor="#FFAA44";

    h1.setAttribute("id","comidaChina"); //Cambiamos el atributo id
    h1.setAttribute("class","Funciona"); //Cambiamos el atributo class
}

function Numerar(){
    // var h1=document.getElementsByTagName("h1")[0]; // Pilla el h1 (el primero)
    // var h1=document.getElementById("titulo"); // Pilla el id titulo
    // var h1=document.getElementsByClassName("informacion")[0]; // Pilla el class informacion (el primero)

    var parrafos=document.querySelectorAll("#contenido>p");  //Selector css

    for(let i=0; i<parrafos.length;i++){

     parrafos[i].innerHTML=(i+1)+". " +parrafos[i].innerHTML;
    //  if(i%2==0){
    //      parrafos[i].style.backgroundColor="red";
    //  }
    //  else{
    //     parrafos[i].style.backgroundColor="yellow";
    //  }
    }
      
}

function meterParrafos(cantidad){
    var contenido=document.getElementById("contenido");

    for(let i=1;i<=cantidad;i++){
        var p=document.createElement("p");
        p.innerHTML="Parrafo creado " +i;
        p.setAttribute("class", "automatico");
        p.onclick=pulsado;
        contenido.appendChild(p);
    }

}

function pulsado(){
    alert(this.innerHTML);
}

function CrearTabla(cantidad){
    var contenido=document.getElementById("contenido");

    var tabla=document.createElement("table");

 

    for(let i=1;i<=cantidad;i++){
        var tr=document.createElement("tr");
        var td=document.createElement("td");
        td.innerHTML= "Celda " + i;
        tr.appendChild(td);
        tabla.appendChild(tr);

        td.onclick=pulsado;

        if(i%2==0){
            tr.style.color="blue";
            tr.style.backgroundColor="red";
        }
        else{
            tr.style.color="red";
            tr.style.backgroundColor="blue";
        }
    }

    document.body.appendChild(tabla);
   
}

function insertaTablaMulti(numero) {  
 

    var contenido=document.getElementById("contenido");

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
        tr.onclick=pulsado1;
    }
   
    document.body.appendChild(tabla);
}

function pulsado1(){

    alert(this.innerHTML);
}

// function pulsado1(){
//     let a=[];
//     let b=[];
//     for(i=0;i<=4;i++){

//         a[i]=document.getElementsByTagName("td")[i].innerHTML;
//         b=b+a[i];
//     }
//     alert(b);
// }




