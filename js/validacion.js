document.getElementById("regBtn").addEventListener("click", Validar);

function Validar() {
var formulario = document.getElementById("formu");
if (formulario.checkValidity() && (password1.value === password2.value)) {
showAlertSuccess(); // Llamar a la función de éxito
} else {
showAlertError(); // Llamar a la función de error
}
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
