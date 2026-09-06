// Personaje de TV 
let nombre = "Jaimito"; 
let edad = 19; 
let ocupacion = "Secundario"; 

let personaje = {
    nombre: "Jaimito", 
    edad: 19, 
    ocupacion: "Secundario",
}; //objeto literal, no se muestra esto en orden

console.log(personaje.nombre)
console.log(personaje["nombre"])//string)


personaje.edad = 17;

let llave = "edad"; 
personaje[llave] = 15;
personaje["edad"] = 15;

delete personaje.ocupacion; // elimina la propiedad



