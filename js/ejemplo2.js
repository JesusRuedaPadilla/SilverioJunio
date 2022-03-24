//Ejercicio 1: Clonar el ol que esta dentro de id=contenedor e insertarlo detras, cambiando la O por una A (ejemplo Opcion por Apcion)

    //Forma no correcta (da fallo)

    // function Remplaza_O () {
    //     var ejecicio1=document.getElementsByTagName("ol")[0];
    //     ejecicio1.appendChild(ejecicio1.cloneNode(true));
        
    //     var ejercicio11=document.getElementsByTagName("ol")[2];
    //     for(let i=0; i<=12;i++){
    //         if(i%2!=0){
    //             ejercicio11.childNodes[i].innerHTML.replace("O","A");
    //         } 
    //     }

    // }

      //Forma Profesor
      function ejercicio1 (){
        var ol=document.querySelector("#contenedor>ol");
        var clon=ol.cloneNode(true);
        var lis=clon.getElementsByTagName("li");
        for(let i=0;i<lis.length;i++){
            lis[i].childNodes[0].nodeValue=lis[i].childNodes[0].nodeValue.replace("O","A");
        }
        ol.parentElement.appendChild(clon);
      }
   

//Ejercicio 2: Mover el segundo li (Opcion2) al principio (antes de Opcion1)

    function moverLi2(){
        var li2=document.getElementsByTagName("li")[1];
        var li1=document.getElementsByTagName("li")[0];
        padre=li1.parentElement;
        padre.insertBefore(li2,li1);

    }

//Ejercicio 3: Clonar Opcion 5 modificar el contenido como si fuera la Opcion 3 e insertarla delante de la 3 actual (no reemplazarla)

    //Forma no correcta (da fallo)

    // var h=document.getElementsByTagName("li")[4];
    // var opcion3=document.getElementsByTagName("li")[2];
    // var padre= opcion3.parentElement;
    // padre.insertBefore(h,opcion3);
    // var opcion4=document.getElementsByTagName("li")[8];
    // padre.insertBefore(opcion4,opcion3);


    // var opcion5= document.getElementsByTagName("li")[4];

    // opcion5.appendChild(opcion5.cloneNode(true));
    // var padre=opcion5.parentElement;

    // var opcion3=document.getElementsByTagName("li")[2];

    // padre.insertBefore(opcion5,opcion3);

    // opcion5.childNodes[1].innerHTML.replace("5","3");


    //Forma profesor
    function ejercicio3 (){
        var ol=document.querySelector("#contenedor>ol");
        var clon=ol.children[4].cloneNode(true);
        var lis=clon.getElementsByTagName("li");
        for(let i=0;i<lis.length;i++){
            lis[i].childNodes[0].nodeValue=lis[i].childNodes[0].nodeValue.replace("5","3");
        }
        clon.childNodes[0].nodeValue=clon.childNodes[0].nodeValue.replace("5","3");
        ol.insertBefore(clon,ol.children[2]);
        
    //Ejercicio 4: Borrar la opcion 3 antigua
        ol.removeChild(clon.nextElementSibling);
      }


    function eliminaAntigua3 (){
        var opcion3=document.getElementsByTagName("li")[9];
        opcion3.parentElement.removeChild(opcion3);

    }
    //Forma profesor a partir del ejercicio 3
        ol.removeChild(ol.children[3]);
    
//Ejercicio 5: Organizar la opcion 5 al rever (que aparezca 5.4,5.3,5.2,etc)

 //Forma Profesor modo dificil con array
    function OrganizaReverso (){
        var hijos5=document.querySelectorAll("ol>li>ol li");
        var vector=[];
        for(let i=0;i<hijos5.length;i++){
            vector.push(hijos5[i]);
        }
        vector.reverse()

    }

   // Forma Profesor mas sencilla sin usar bucle para hacer un vector

   function OrganizaReverso1 (){
    var hijos5=document.querySelectorAll("ol>li>ol li");
    var vector =Array.from(hijos5).reverse();
    //Array.from convierte a Array algo que se parece a un array (pej una coleccion de li etc)
    for(let i=0;i<vector.length;i++){
        hijos5[i].parentElement.appendChild(vector[i]);
    }
}
  