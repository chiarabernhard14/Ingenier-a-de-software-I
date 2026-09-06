const user = {id : 1}; 
//user = 1;
user.name= "Chiara"; 
user.guardar = function(){
    console.log("Guardando", user.name);
}
user.guardar(); 
// delete user.name; 
// delete user.guardar; 
// console.log(user); 

//const user1 = Object.freeze({id:1}); 
const user1 = Object.seal({id:1}); 
user1.name = "Kiara"; 
user1.id = 3; 
console.log(user1); 