// ========================================
// MARANLIFE
// JavaScript
// ========================================


// ========================================
// BOTONES DE COMPRA
// ========================================

const botones = document.querySelectorAll(".buy-button");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        alert("La tienda todavía está en configuración.");

    });

});


// ========================================
// COPIAR IP
// ========================================

const botonIP = document.getElementById("copy-ip");

botonIP.addEventListener("click", async () => {

    const ip = "maranlife.kinetic.host";

    try {

        await navigator.clipboard.writeText(ip);

        botonIP.textContent = "¡IP COPIADA!";

        setTimeout(() => {

            botonIP.textContent = "COPIAR IP";

        }, 2000);

    } catch (error) {

        alert("No se pudo copiar la IP.");

    }

});