function Usuario(name){
    this.name = name;  
}

console.log(Usuario.name); 
console.log(Usuario.length); 

const U = Usuario
let user = new U("Matias"); 

console.log(user); 

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, "matias"); 

console.log(user1); 


function returned(){
    return function(){
        console.log("Hola mundooo");
    }
}

let saludo = returned(); 
saludo(); 


