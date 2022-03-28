//Libreria para realizar una calculadora
function pulsadoDigito (){
    var numPulsado=this.innerHTML;
    //+= significa que a lo que ya hay le concatena lo siguiente (en este caso "" + numPulsado)
    if(display.innerHTML=="0"){
        display.innerHTML=numPulsado;
    }
    else{
        display.innerHTML+=numPulsado;
    }
       
}

function pulsadoPunto(){
    if(display.innerHTML==""){
        display.innerHTML="0.";
    }
    else if (display.innerHTML.indexOf(".")==-1){
        display.innerHTML+=".";
    }

}

function operar(){
    var operacion=this.innerHTML;
    cifra1=display.innerHTML;
    operador=operacion;
    display.innerHTML=0;
}

function calcular(){
    var cifra2=display.innerHTML;
    switch(operador){
        case "+":{
            display.innerHTML=parseFloat(cifra1)+parseFloat(cifra2);
            break;
        }
        case "-":{
            display.innerHTML=cifra1-cifra2;
            break;
        }
        case "*":{
            display.innerHTML=cifra1*cifra2;
            break;
        }
        case "/":{
            display.innerHTML=cifra1/cifra2;
            break;
        }
    }
}

window.addEventListener("load",function(){
    //Capturamos display
    var display=document.getElementById("display");
    //Capturamos digitos

    var digitos=document.querySelectorAll(".digito");
    //otra forma
        // var digitos=document.getElementsByClassName("digito");

    for(let i=0;i<digitos.length;i++){

        digitos[i].addEventListener("click",pulsadoDigito);
    
    }

    //Capturamos el .

    var punto=document.querySelector(".punto");
    
    punto.addEventListener("click",pulsadoPunto);

    //capturamos el operador
    var operadores=document.querySelectorAll(".operador");

    for(let i=0;i<operadores.length;i++){

        operadores[i].addEventListener("click",operar);
    }
  
    //capturamos el =
    var igual=document.querySelector(".calcular");

    igual.addEventListener("click",calcular);

    //
    var cifra1=0;
    var operador="";


})





//     var valorAnterior=document.getElementById("valor-anterior");
//     var valorActual=document.getElementById("valor-actual");
//     var numeros=document.querySelectorAll(".numeros");
//     var operadores=document.querySelectorAll("operador");

// var todo=document.querySelectorAll("button");

// function suma(num1,num2){
//       return num1+num2;
       
// }

// function resta(num1,num2){
//     return num1-num2;
     
// }

// function multiplicacion(num1,num2){
//     return num1*num2;
     
// }

// function division(num1,num2){
//     return num1/num2;
     
// }

// console.log(suma(2,3));

// window.onload=function(){

   



//         li1.addEventListener("click",moverLi2);
//         li1.addEventListener("click",rojoLi1);

//         li3=document.getElementsByTagName("li")[2];

//         li3.onclick=function(){
//             li1.removeEventListener("click",moverLi2);
//         }

//     var li5=document.getElementsByTagName("li")[4];
//     li5.ondblclick=ejercicio3;


// }

