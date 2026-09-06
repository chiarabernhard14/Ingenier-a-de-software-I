function getId(arr, id){
    if (id < 0 || arr.length < id){
        return "Salida no valida";
    }else{
        return arr[id];
    }
}
let resultado = getId([1,2,3],0);
console.log(resultado);