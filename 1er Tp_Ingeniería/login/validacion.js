const form = document.getElementById('form'); 
const nombre_entrada = document.getElementById('nombre-entrada'); 
const email_entrada = document.getElementById('email-entrada');
const contraseña_entrada = document.getElementById('contraseña-entrada');  
const mensaje_error = document.getElementById('mensaje-error')
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    let errores =[]; 
    if(nombre_entrada){
        errores = getSigupFormErrors(nombre_entrada.value, email_entrada.value, contraseña_entrada.value)
    }else{
        errores = getLoginFormErrors(email_entrada.value, contraseña_entrada.value)
    }
    if(errores.length > 0){
        e.preventDefault()
        mensaje_error.innerText = errores.join(". ")
    }
})

function getSigupFormErrors(nombre, email, contraseña){
    let errores = []; 
    if(nombre === ''|| nombre == null){
        errores.push("Se necesita su nombre")
        nombre_entrada.parentElement.classList.add("incorrecto")
    }
    if(email === ''|| email == null){
        errores.push("Se necesita su email")
        email_entrada.parentElement.classList.add("incorrecto")       
    }
    if(contraseña === ''|| contraseña == null){
        errores.push("Se necesita su contraseña")
        contraseña_entrada.parentElement.classList.add("incorrecto")
    }
    if(contraseña.length < 8){
        errores.push("Se necesitan al menos 8 carácteres para la contraseña")
        contraseña_entrada.parentElement.classList.add("incorrecto")
    }


    return errores;

}
function getLoginFormErrors(email, contraseña){
    let errores = []; 

    if(email === ''|| email == null){
        errores.push("Se necesita su email")
        email_entrada.parentElement.classList.add("incorrecto")       
    }
    if(contraseña === ''|| contraseña == null){
        errores.push("Se necesita su contraseña")
        contraseña_entrada.parentElement.classList.add("incorrecto")
    }
    if(contraseña.length < 8){
        errores.push("Se necesitan al menos 8 carácteres para la contraseña")
        contraseña_entrada.parentElement.classList.add("incorrecto")
    }


    return errores;

}
const allInputs= [nombre_entrada, email_entrada, contraseña_entrada].filter(input => input != null)

allInputs.forEach(input =>{
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('incorrecto')){
            input.parentElement.classList.remove('incorrecto')
            mensaje_error.innerText = ''
        }
    })
})
