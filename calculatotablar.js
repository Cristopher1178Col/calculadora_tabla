function calcular() {
    const num1 = parseFloat(document.getElementById('N1').value);
    const num2 = parseFloat(document.getElementById('N2').value);
    const operacion = document.querySelector('input[name="operacion"]:checked');
    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Por favor, ingresa ambos valores numéricos.',
            confirmButtonText: 'Aceptar'
        });
        return false;
    }

    if (num1 < 0 || num2 < 0) {
        Swal.fire({
            icon: 'warning',
            title: '¡Advertencia!',
            text: 'No se permiten valores negativos.',
            confirmButtonText: 'Aceptar'
        });
        return false;
    }

    if (!operacion) {
        Swal.fire({
            icon: 'question',
            title: '¿Que operacion necesitas?',
            text: 'Por favor, selecciona una operación.',
            confirmButtonText: 'Aceptar'
        });
        return false;
    }
    let resultado;
    switch (operacion.value) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'La división por cero no está permitida.',
                    confirmButtonText: 'Aceptar'
                });
                return false;
            }
            resultado = num1 / num2;
            break;
    }
    document.getElementById('result').value = resultado;
    return false;
}




