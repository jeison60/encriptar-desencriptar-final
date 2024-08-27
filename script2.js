document.addEventListener('DOMContentLoaded', function() {
    const outputText = document.getElementById('output-text');
    const copiarBoton = document.getElementById('copiar');

    // Inicialmente, el textarea derecho está deshabilitado
    outputText.disabled = true;

    // Evento para el botón "Encriptar"
    document.getElementById('encriptar').addEventListener('click', function() {
        const input = document.getElementById('input-text').value;
        const resultado = encriptar(input);
        outputText.value = resultado;
        eliminarImagenDeFondo();
        mostrarBotonCopiar();
        outputText.disabled = false; // Habilitar el textarea derecho
        ajustarAlturaTextarea(); // Ajustar altura del textarea si cumple la media query
    });

    // Evento para el botón "Desencriptar"
    document.getElementById('desencriptar').addEventListener('click', function() {
        const input = document.getElementById('input-text').value;
        const resultado = desencriptar(input);
        outputText.value = resultado;
        eliminarImagenDeFondo();
        mostrarBotonCopiar();
        outputText.disabled = false; // Habilitar el textarea derecho
        ajustarAlturaTextarea(); // Ajustar altura del textarea si cumple la media query
    });

    // Evento para el botón "Copiar Texto"
    copiarBoton.addEventListener('click', function() {
        copiarTexto();
    });

    function encriptar(texto) {
        let resultado = '';
        for (let i = 0; i < texto.length; i++) {
            let char = texto.charCodeAt(i);
            if (char >= 97 && char <= 122) {
                char = ((char - 97 + 3) % 26) + 97;
            }
            resultado += String.fromCharCode(char);
        }
        return resultado;
    }

    function desencriptar(texto) {
        let resultado = '';
        for (let i = 0; i < texto.length; i++) {
            let char = texto.charCodeAt(i);
            if (char >= 97 && char <= 122) {
                char = ((char - 97 - 3 + 26) % 26) + 97;
            }
            resultado += String.fromCharCode(char);
        }
        return resultado;
    }

    function eliminarImagenDeFondo() {
        outputText.style.backgroundImage = 'none';
    }

    function mostrarBotonCopiar() {
        copiarBoton.style.display = 'block';
    }

    function copiarTexto() {
        outputText.select();
        document.execCommand('copy');
    }

    function ajustarAlturaTextarea() {
        // Comprobar si la pantalla es menor a 768px de ancho
        if (window.matchMedia("(max-width: 768px)").matches) {
            outputText.style.height = '30rem'; // Ajusta la altura aquí para pantallas pequeñas
        } else {
            // Comprobar si la pantalla es menor a 1200px de ancho
            if (window.matchMedia("(max-width: 1200px)").matches) {
                outputText.style.height = '35rem'; // Ajusta la altura aquí para pantallas medianas
            } else {
                // Pantallas grandes
                outputText.style.height = '40rem'; // Ajusta la altura aquí para pantallas grandes
            }
        }
    }
});
