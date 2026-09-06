let longi = -3; 
function crearArray(n){
    if(n <= 0){
        return "falla"
    }
    collection = []; 
    for(let i = 1; n >= i; i++){
        collection.push(i);
    }
    return collection;
}
let resultado = crearArray(longi); 
console.log(resultado);