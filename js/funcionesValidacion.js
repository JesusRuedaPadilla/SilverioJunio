//Function que dada una cadena devuelve true o false
function esDNI(cadena){

    var respuesta=false;
    var expDNI=(/^(\d{7,8})([A-Z])$/ig);
    var partes=expDNI.exec(cadena);

    if(partes){
        var letras="TRWAGMYFPDXBNJZSQVHLCKE";
        if(letras[partes[1]%23]==partes[2].toUpperCase()){
            respuesta=true;
        }
    }

    return respuesta;
}