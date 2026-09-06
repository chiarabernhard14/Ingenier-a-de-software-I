let array = [2,5,7,-5,-100,55];

function getMeyMa(arr){
    let mayor = arr[0];
    let menor = arr[0];
    for(i of arr){
        // if(mayor < i){
        //     mayor =  i;
        // }else if(menor > i){
        //     menor = i;
        // }
        menor = menor < i ? menor : i;
        mayor = mayor > i ? mayor : i;
    }
    return [mayor, menor]
}

let numeros = getMeyMa(array)
console.log(numeros);