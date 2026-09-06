const entrada = document.getElementById("tarea-nueva"); 
const lista = document.getElementById("container-lista"); 

function añadirTarea(){
    if(entrada.value === ''){
        alert("Ingrese una tarea")
    }else{
        let li = document.createElement("li");
        li.innerHTML = entrada.value; 
        lista.appendChild(li); 

        let span = document.createElement("span"); 
        li.appendChild(span);

        guardarDatos();

    }
    entrada.value = ""; 
    
}

lista.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("hecho");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    guardarDatos();

}, false);



function guardarDatos(){
    localStorage.setItem("datos",lista.innerHTML);
}
function mostrarTareas(){
    lista.innerHTML = localStorage.getItem("datos");
}
mostrarTareas();