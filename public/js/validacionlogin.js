let login = document.getElementById("login")

login.addEventListener("submit", function(e){
    let errores = [];

    let inputEmail = document.getElementById("email");
    console.log(inputEmail)
    let inputPassword = document.getElementById("password")
    
    if(inputEmail.value == ""){
        errores.push("Debes ingresar tu e-mail")
    } 

    if(inputPassword.value == ""){
        errores.push("Debes ingresar tu contraseña")
    }
    

    if(errores.length > 0){
        e.preventDefault();
    }
   
    let small = document.querySelector("div.errores");
    small.innerHTML = "";
    for (let i = 0; i  < errores.length; i++) {
        small.innerHTML += "<li>" + errores[i] + "</li>"
    }



})