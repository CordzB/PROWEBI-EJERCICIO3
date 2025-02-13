document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("conversionForm");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const historialBody = document.getElementById("historialBody");
    const btnLimpiarHistorial = document.getElementById("btnLimpiarHistorial");
    let contador = 1; 

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const valor = parseFloat(document.getElementById("valor").value);
        const conversion = document.getElementById("conversion").value;

        
        if (isNaN(valor) || valor <= 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor, ingrese un número válido mayor a 0.",
            });
            return;
        }

        let resultado;
        switch (conversion) {
            case "km-m":
                resultado = `${valor} km = ${valor * 1000} metros`;
                break;
            case "m-cm":
                resultado = `${valor} m = ${valor * 100} centímetros`;
                break;
            case "ft-pulg":
                resultado = `${valor} ft = ${valor * 12} pulgadas`;
                break;
            case "yarda-pulg":
                resultado = `${valor} yardas = ${valor * 36} pulgadas`;
                break;
            default:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Seleccione una conversión válida.",
                });
                return;
        }

        
        Swal.fire({
            icon: "success",
            title: "Conversión Exitosa",
            text: resultado,
            confirmButtonText: "¡Entendido!",
        });

        
        agregarAlHistorial(conversion, resultado);
    });

    
    btnLimpiar.addEventListener("click", function () {
        form.reset(); 
    });

    
    function agregarAlHistorial(conversion, resultado) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${contador++}</td>
            <td>${conversion.replace("-", " a ")}</td>
            <td>${resultado}</td>
        `;
        historialBody.appendChild(fila);
    }

    
    btnLimpiarHistorial.addEventListener("click", function () {
        historialBody.innerHTML = ""; 
        contador = 1; 
    });
});
