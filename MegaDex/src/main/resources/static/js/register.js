document.addEventListener('submit', function() {
    event.preventDefault();
    const registrationForm = document.getElementById("registration-form");
    const errorModal = document.getElementById("error-modal");
    const errorMessage = document.getElementById("error-message");

        
    // Crea un oggetto FormData con i dati del form
        const formData = new FormData(registrationForm);

        // Invia la richiesta con fetch
        fetch('http://localhost:8080/register/save', {
            method: 'POST',
            headers: {
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Se la risposta è un JSON
                }
                if(response.status === 409){
                    throw new Error("Email già utilizzata");
                }
                if(response.status === 304){
                    throw new Error("L'email non è corretta");
                }
                if(response.status === 406){
                    throw new Error("La password deve essere lunga almeno 12 caratteri, contenendo almeno una maiuscola, una minuscola, un numero e un carattere speciale.");
                }
                throw new Error("Errore sconosciuto durante la registrazione");


            })
            .then(data => {
                // Mostra un messaggio di conferma di registrazione
                alert("Registrazione avvenuta con successo!");
                // Puoi anche fare un redirect ad un'altra pagina, ad esempio:
                window.location.href = "login.html";
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

// Funzione per mostrare il popup d'errore
// function showErrorModal(message) {
//     const modal = document.getElementById("error-modal");
//     const errorMessage = document.getElementById("error-message");
//     errorMessage.textContent = message;
//     modal.style.display = "block";
//
//     // Chiudi il modal quando l'utente clicca sulla 'x'
//     document.querySelector(".close").onclick = function() {
//         modal.style.display = "none";
//     };
//
//     // Chiudi il modal se l'utente clicca fuori dal popup
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     };
// }