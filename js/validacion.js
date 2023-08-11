let boton = document.getElementById('regBtn');

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function validar() {
    let contraseña1 = document.getElementById('password1').value;
    let contraseña2 = document.getElementById('password2').value;
    let terminos= document.getElementById('terminos').checked;
    
    let name = document.getElementById('nombre').value;
    let lastname = document.getElementById('apellido').value;
    let correo = document.getElementById('email').value;
    if (name === "" || lastname === "" || correo === "" || contraseña1.length < 6 || contraseña2.length < 6 || !terminos) {
        showAlertError();
    } else if (contraseña1 !== contraseña2) {
        showAlertError(); 
    } else {
        showAlertSuccess();
    }
}

boton.addEventListener("click", validar)

