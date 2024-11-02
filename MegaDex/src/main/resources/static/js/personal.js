document.addEventListener("DOMContentLoaded", function() {setPlaceholders();});


// Funzione per abilitare l'input
function enableInput() {
    document.getElementById("email-input").disabled = false;
    document.getElementById("firstName-input").disabled = false;
    document.getElementById("lastName-input").disabled = false;
    document.getElementById("dob-input").disabled = false;
    document.getElementById("phone-input").disabled = false;
    document.getElementById("password-input").disabled = false;
}

// Funzione per mostrare i dati dell'utente come placeholder dei campi
function setPlaceholders() {
        fetch('http://localhost:8080/api/auth/authUser', {
        method: 'GET',
        headers: {
        },
    })
            .then(response => response.json())  // Trasforma la risposta in JSON
            .then(data => {
                document.getElementById("firstName-input").value = data.firstName;
                document.getElementById("lastName-input").value = data.lastName;
                document.getElementById("email-input").value = data.email;
                document.getElementById("dob-input").value = new Date(data.dob).toLocaleDateString('en-CA');
                document.getElementById("phone-input").value = data.phone;
            })

}

// Funzione per modificare i dati utente tramite chiamata PUT al backend
function editSelf(){
        event.preventDefault()
        const errorModal = document.getElementById("error-modal");
        const errorMessage = document.getElementById("error-message");
        const dataForm = document.getElementById("data-form");
        const formData = new FormData(dataForm);

        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value; // Aggiungiamo i dati all'oggetto
        });
        const jsonString = JSON.stringify(formDataObj);


        // Invia i dati con una richiesta fetch PUT
        fetch('http://localhost:8080/api/auth/updateSelf', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonString
        })
            .then(response => {
                if (response.ok) {
                    alert("Modifica avvenuta con successo!");
                    window.location.href = "http://localhost:8080/personal.html";
                }
                if(response.status === 403){
                    throw new Error("Credenziali non valide");
                }
                if(response.status === 304){
                    throw new Error("L'email non è corretta");
                }
                if(response.status === 406){
                    throw new Error("La password deve essere lunga almeno 12 caratteri, contenendo almeno una maiuscola, una minuscola, un numero e un carattere speciale.");
                }
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
}


/**
 * Funzione per eliminare l'account dell'utente.
 * Recupera il token di autenticazione dal localStorage e invia una richiesta
 * DELETE all'API per eliminare l'account dell'utente.
 */
function deleteUser() {
    event.preventDefault();
    fetch('http://localhost:8080/api/auth/deleteSelf', {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) {
                alert("Eliminazione avvenuta con successo!");
                window.location.href = "http://localhost:8080/logout";
            }
        })
        .catch(error => {
            alert("Errore durante l'eliminazione");
        });
}

/**
 * Funzione per gestire la conferma e l'azione di eliminazione.
 * Mostra un messaggio di conferma all'utente e, se confermato,
 * chiama la funzione deleteUser per procedere con l'eliminazione.
 */
function confirmDelete() {
    if (confirm("Sei sicuro di voler procedere? Eliminando il tuo account perderai la tua collezione e i mazzi salvati!")) {
        deleteUser(); // Se l'utente conferma, esegui la funzione
    } else {
        alert("Operazione annullata."); // Messaggio se l'utente rifiuta
    }
}



