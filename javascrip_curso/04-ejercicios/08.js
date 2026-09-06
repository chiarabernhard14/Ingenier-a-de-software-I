let array = [{
    id: 1, 
    name:"Nicolas",
},{
    id: 2, 
    name:"Felipe",
},{
    id: 3, 
    name:"carlos",
}];

let pares =[
    [1, {name:"Nicolas"}], 
    [2, {name:"Felipe"}], 
    [3, {name:"carlos"}]
]; 

function toCollection(arr){
    let array = [];
    for(id in arr){
        let elemento = arr[id]; 
        array[id] = elemento[1];
        array[id].id = elemento[0];
    }
    return array; 
}; 

let resultado = toCollection(pares); 
console.log(resultado);