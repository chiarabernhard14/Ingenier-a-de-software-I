function nombreReso(ancho,alto){
    let salida = "";
    if (ancho >=   1280 && alto >= 720){
        salida = "HD";
    }
    if(ancho >= 1920 && alto >= 1080){
        salida = "FHD";
    }
    if(ancho >= 2560 && alto >= 1440){
        salida = "WQHD";
    }
    if(ancho >= 3840 && alto >= 2160){
        salida = "4K";
    }
    if(ancho >= 7680 && alto >= 4320){
        salida = "8K";
    }else{
        return false;
    }
    return salida;
}
let nombre = nombreReso(3840, 2160);
console.log(nombre);