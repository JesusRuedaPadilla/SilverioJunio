function moverLi2(){
    var li2=document.getElementsByTagName("li")[1];
    var li1=document.getElementsByTagName("li")[0];
    padre=li1.parentElement;
    padre.insertBefore(li2,li1);

}

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


  function rojoLi1(){
    var li1=document.getElementsByTagName("li")[0];
    if(li1.style.color=="red"){
        li1.style.color="blue";
    }
    else{
        li1.style.color="red";
    }
  }

    window.onload=function(){
        var li1=document.getElementsByTagName("li")[0];

        //Una forma

            // li1.onclick=function(){
            //     moverLi2();
            //     rojoLi1();
            // }

        //Forma mejor
            li1.addEventListener("click",moverLi2);
            li1.addEventListener("click",rojoLi1);

            li3=document.getElementsByTagName("li")[2];

            li3.onclick=function(){
                li1.removeEventListener("click",moverLi2);
            }

        var li5=document.getElementsByTagName("li")[4];
        li5.ondblclick=ejercicio3;
    }


