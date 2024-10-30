// Funzionalità di login
document.addEventListener('submit', function() {
    event.preventDefault(); // Evita il comportamento predefinito di invio del form
    const errorModal = document.getElementById("error-modal");
    const errorMessage = document.getElementById("error-message");
    const loginForm = document.getElementById("login-form");
    const formData = new FormData(loginForm);

    // Invia i dati con una richiesta fetch POST
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "personal.html";
                return; // Se la risposta è un JSON
            }
            if(response.status === 403){
                throw new Error("Credenziali non valide");
            }
            throw new Error("Errore sconosciuto durante il login");


        })
        .catch(error => {
            // Mostra un messaggio di errore
            errorMessage.textContent = error;
            errorModal.style.display = "block";
        });
    // Funzione per chiudere il modal
    document.querySelector(".close").addEventListener("click", function() {
        errorModal.style.display = "none";
    });
});

