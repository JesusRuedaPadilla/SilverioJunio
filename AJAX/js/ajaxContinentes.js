window.addEventListener("load", function(){


    var inputs=document.querySelectorAll("div.regiones input");
 

   for(let i=0;i<inputs.length;i++){
       inputs[i].onclick=descargarPaises;
   }

   
})


function descargarPaises(){
    var region=this.value;

    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && ajax.status==200){
            
            var paises=JSON.parse(ajax.responseText);
            
            var select=document.getElementById("paises");
            select.innerHTML="";

            for(let i=0;i<paises.length;i++){

                var option=document.createElement("option");
          
                option.innerHTML=paises[i].translations.spa.official;

                option.onclick= mostrarInforPais(paises[i]);

                select.appendChild(option);
            }
            
        }
    }
    ajax.open("GET","https://restcountries.com/v3.1/region/"+region);
    ajax.send();
}

function mostrarInforPais(objetoPais) {

return function(){

    var div=document.getElementById("inforPais");
    div.innerHTML="";

   var imagen=document.createElement("img");
   imagen.setAttribute("src",objetoPais.flags.png);

   div.appendChild(imagen);

   var h1=document.createElement("h1");
    
   h1.innerHTML=objetoPais.translations.spa.official;

    div.appendChild(h1);
   
    var h3=document.createElement("h3");
    
   h3.innerHTML=objetoPais.capital;

    div.appendChild(h3);
    // bandera nombre poblacion fronteras y nombre de la capital
    
}
}