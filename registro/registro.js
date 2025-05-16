function send(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let contraseña1 = document.getElementById("contraseña").value;
    let contraseña2 = document.getElementById("contraseña2").value;
    let enviar = document.getElementById("enviar");

    if (nombre == "" || apellidos == "" || correo == "" || 
        contraseña1 == "" || contraseña2 ==""){
        alert("Hay campos vacíos");
    }
    else if(contraseña1 != contraseña2){
        alert("Las contraseñas no coinciden")
    }
    else{
        alert("Usuario creado correctamente")
    }
};

