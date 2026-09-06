// let user = {
//     id:1,
//     email: "Chiaraaaaaa@gmail.com", 
//     name: "Kiara", 
//     activa: true, 
//     recuperarClave: function(){
//         console.log("Recuperando clave...");
//     }, 
// }; 
// let user1 = {
//     id:2,
//     email: "kiaraaaaaa@gmail.com", 
//     name: "Chiaraiara", 
//     activa: true, 
//     recuperarClave: function(){
//         console.log("Recuperando clave...");
//     }, 
// }; 

function crearUsuario(name, email){
    return {
    email, 
    name, 
    activa: true, 
    recuperarClave: function(){
        console.log("recuperando clave...");
    }, 
    }; 
}

let user1 = crearUsuario("laaaa", "laaaaaaa(email)"); 

let user2 = crearUsuario("Martina", "Martina(email)"); 

console.log(user1); 
console.log(user2); 