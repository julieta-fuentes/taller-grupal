function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', () => {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    password2.addEventListener('input', () => {
        const areEqual = password1.value === password2.value;
        if (areEqual) {
            console.log('Las contraseñas coinciden.');
        } else {
            console.log('Las contraseñas no coinciden.');
        }
    });
});