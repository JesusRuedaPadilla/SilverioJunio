function validaDNI(){
    var valor=this.value;
    if(this.nextElementSibling.nodeName=="SPAN"){
        this.parentNode.removeChild(this.nextElementSibling);
    }
    
    if(!esDNI(valor)){
        this.focus();
        
        var span=document.createElement("span");
        span.innerHTML="El Dni es incorrecto";
        span.style.color="red";
        
        this.parentNode.insertBefore(span,this.nextElementSibling);
    }

}

function validaEdad(valor){
    var valor=this.value;
    if(this.nextElementSibling.nodeName=="SPAN"){
        this.parentNode.removeChild(this.nextElementSibling);
    }
    
    if(!esEdad(valor)){
        this.focus();
        
        var span=document.createElement("span");
        span.innerHTML="Compruebe que la edad este entre 1 y 99 años";
        span.style.color="red";
        
        this.parentNode.insertBefore(span,this.nextElementSibling);
    }

}

window.addEventListener("load",function(){
    var formulario=document.getElementById("formulario");
    //Establecer dni

    formulario["dni"].focus();
    formulario["dni"].onblur=validaDNI;

    formulario["edad"].onblur=validaEdad;


})