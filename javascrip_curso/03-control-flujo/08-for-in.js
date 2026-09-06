let user = {
    id:1, 
    name: "Ricardo", 
    age:12,
}; 
for(let prop in user){
    console.log(prop,user[prop]);
};

let animales = ["cerdo", "vaca", "pajaro"]; 
for(let indice in animales){
    console.log(indice,animales[indice])
};