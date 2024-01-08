document.addEventListener("DOMContentLoaded", function () {
    let finishPurchaseButton = document.querySelector(".purchase");
    if (finishPurchaseButton){
        finishPurchaseButton.addEventListener("click", function () {

        fetch("/purchase", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.error("Error al finalizar la compra.");
            }
        })
        .then(function (data) {
            console.log("Ticket generado:", data);
            if (data.ticket) {
                window.location.href = '/ticket';
            } else {
                throw new Error("No se pudo generar el ticket.");
            }
        })
        .catch(function (error) {
            alert("No se encuentra esta cantidad de productos en stock");
            console.error("Error al realizar la solicitud:", error);
            });
        });
    }
});