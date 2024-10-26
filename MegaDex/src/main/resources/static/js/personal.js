<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", function() {
    setPlaceholders();
    const translations = {
        it: {
            registrationTitle: "Dati Anagrafici",
            usernameLabel: "Nome Utente:",
            emailLabel: "Email:",
            fullNameLabel: "Nome Completo:",
            birthdateLabel: "Data di Nascita:",
            birthplaceLabel: "Luogo di Nascita:",
            phoneNumberLabel: "Numero di Telefono:",
            editButton: "Modifica",
            homeLink: "HOME",
            deckbuilderLink: "DECKBUILDER",
            communityLink: "COMMUNITY",
            loginLink: "AREA PERSONALE",
            decksTitle: "Mazzi personali",
            deckNameHeader: "Nome Mazzo",
            deckTypesHeader: "Tipi",
            deckActionsHeader: "Azioni",
            publishButton: "Pubblica",
            editDeckButton: "Modifica",
            deleteDeckButton: "Cancella",
        },
        en: {
            registrationTitle: "User Data",
            usernameLabel: "Username:",
            emailLabel: "Email:",
            fullNameLabel: "Full Name:",
            birthdateLabel: "Birthdate:",
            birthplaceLabel: "Birthplace:",
            phoneNumberLabel: "Phone Number:",
            editButton: "Edit",
            homeLink: "HOME",
            deckbuilderLink: "DECKBUILDER",
            communityLink: "COMMUNITY",
            loginLink: "MY ACCOUNT",
            decksTitle: "Personal Decks",
            deckNameHeader: "Deck Name",
            deckTypesHeader: "Types",
            deckActionsHeader: "Actions",
            publishButton: "Publish",
            editDeckButton: "Edit",
            deleteDeckButton: "Delete",
        }
    };

=======
setPlaceholders();
const translations = {
    en: {
        home: "HOME",
        deckbuilder: "DECKBUILDER",
        community: "COMMUNITY",
        collection: "BINDER",
        personalArea: "MY ACCOUNT",
        registrationTitle: "Personal Data",
        firstNameLabel: "First Name:",
        lastNameLabel: "Last Name:",
        emailLabel: "Email:",
        passwordLabel: "Password:",
        dobLabel: "Date of Birth:",
        phoneLabel: "Phone Number:",
        firstNamePlaceholder: "Mario",
        lastNamePlaceholder: "Last Name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "************",
        dobPlaceholder: "Date of Birth",
        phonePlaceholder: "Phone Number",
        deleteUser: "Delete User",
        logout: "Logout",
        modify: "Modify",
        save: "Save",
        personalDecks: "Personal Decks",
        errorMessage: "An error occurred during registration. Please try again."
    },
    it: {
        home: "HOME",
        deckbuilder: "DECKBUILDER",
        community: "COMMUNITY",
        collection: "COLLEZIONE",
        personalArea: "AREA PERSONALE",
        registrationTitle: "Dati Anagrafici",
        firstNameLabel: "Nome:",
        lastNameLabel: "Cognome:",
        emailLabel: "Email:",
        passwordLabel: "Password:",
        dobLabel: "Data di Nascita:",
        phoneLabel: "Numero di Telefono:",
        firstNamePlaceholder: "Mario",
        lastNamePlaceholder: "Cognome",
        emailPlaceholder: "Email",
        passwordPlaceholder: "************",
        dobPlaceholder: "Data di Nascita",
        phonePlaceholder: "Numero di Telefono",
        deleteUser: "Cancella utente",
        logout: "Logout",
        modify: "Modifica",
        save: "Salva",
        personalDecks: "Mazzi personali",
        errorMessage: "Si è verificato un errore nella registrazione. Riprova."
    }
};

// Function to switch languages
function switchLanguage(lang) {
    // Update navigation links
    document.querySelector("a[href='/index.html']").textContent = translations[lang].home;
    document.querySelector("a[href='/deckbuilder.html']").textContent = translations[lang].deckbuilder;
    document.querySelector("a[href='/community.html']").textContent = translations[lang].community;
    document.querySelector("a[href='/sleeve.html']").textContent = translations[lang].collection;
    document.querySelector("a[href='/personal.html']").textContent = translations[lang].personalArea;

    // Update section titles
    document.querySelector("#registration-title").textContent = translations[lang].registrationTitle;
    document.querySelector("#deck-list h1").textContent = translations[lang].personalDecks;

    // Update form labels by id
    document.getElementById("firstName-label").textContent = translations[lang].firstNameLabel;
    document.getElementById("lastName-label").textContent = translations[lang].lastNameLabel;
    document.getElementById("email-label").textContent = translations[lang].emailLabel;
    document.getElementById("password-label").textContent = translations[lang].passwordLabel;
    document.getElementById("dob-label").textContent = translations[lang].dobLabel;
    document.getElementById("phone-label").textContent = translations[lang].phoneLabel;

    // Update form placeholders
    document.querySelector("#firstName-input").setAttribute("placeholder", translations[lang].firstNamePlaceholder);
    document.querySelector("#lastName-input").setAttribute("placeholder", translations[lang].lastNamePlaceholder);
    document.querySelector("#email-input").setAttribute("placeholder", translations[lang].emailPlaceholder);
    document.querySelector("#password-input").setAttribute("placeholder", translations[lang].passwordPlaceholder);
    document.querySelector("#dob-input").setAttribute("placeholder", translations[lang].dobPlaceholder);
    document.querySelector("#phone-input").setAttribute("placeholder", translations[lang].phonePlaceholder);

    // Update button and link text
    document.querySelector("button[onclick='confirmDelete()']").textContent = translations[lang].deleteUser;
    document.querySelector(".logout-link").textContent = translations[lang].logout;
    document.querySelector("button[onclick='enableInput()'] span").textContent = translations[lang].modify;
    document.querySelector("button[onclick='editSelf()']").textContent = translations[lang].save;

    // Update error modal
    document.querySelector("#error-message").textContent = translations[lang].errorMessage;
}

// Language switcher logic
document.querySelector("#switch-lang").addEventListener("click", () => {
    const flagImage = document.querySelector("#flag-image");
    const currentLang = flagImage.getAttribute("src").includes("it") ? "it" : "en";
    const newLang = currentLang === "it" ? "en" : "it";

    // Toggle flag image
    flagImage.setAttribute("src", newLang === "it" ? "media/it.png" : "media/uk.png");

    // Apply the translations
    switchLanguage(newLang);
});
>>>>>>> Stashed changes
// function renderDecks() {
//     const tableBody = document.querySelector('#deck-list tbody');
//
//     decks.forEach(deck => {
//         const row = document.createElement('tr');
//         row.classList.add('deck-row');
//         row.setAttribute('data-deck', deck.name);
//         row.innerHTML = `
//             <td>${deck.name}</td>
//             <td>${deck.types}</td>
//             <td class="button-group">
//                 <button class="icon-btn" onclick="publishDeck('${deck.name}')"><i class="bi bi-share-fill"></i><span> Pubblica</span></button>
//                 <button class="icon-btn" onclick="editDeck('${deck.name}')"><i class="bi bi-pencil-square"></i><span> Modifica</span></button>
//                 <button class="icon-btn" onclick="deleteDeck('${deck.name}')"><i class="bi bi-trash-fill"></i><span> Cancella</span></button>
//             </td>
//         `;
//
//         row.addEventListener('click', () => toggleDeckDetails(deck.name));
//
//         tableBody.appendChild(row);
//     });
// }

// function toggleDeckDetails(deckName) {
//     const detailsRow = document.querySelector(`tr[data-deck="details-${deckName}"]`);
//     if (detailsRow) {
//         detailsRow.style.display = detailsRow.style.display === 'none' || detailsRow.style.display === '' ? 'table-row' : 'none';
//     } else {
//         const deck = decks.find(d => d.name === deckName);
//         const newRow = document.createElement('tr');
//         newRow.setAttribute('data-deck', `details-${deckName}`);
//         newRow.classList.add('details-row');
//         newRow.style.display = 'table-row'; // Show the row
//         newRow.innerHTML = `
//     <td colspan="3" class="card-details-inner">
//         <table>
//             <tbody>
//                 ${deck.cards.map(card => `
//                     <tr>
//                         <td><strong>Nome: </strong>${card.name}</td><td>  <strong>Tipo: </strong> ${card.type} </td><td> <strong>Quantità: </strong>${card.quantity} </td><td> <strong>Rarità: </strong> ${card.rarity}</td>
//                     </tr>
//                 `).join('')}
//             </tbody>
//         </table>
//     </td>
// `;
//
//
//         const row = document.querySelector(`tr[data-deck="${deckName}"]`);
//         row.insertAdjacentElement('afterend', newRow);
//     }
// }
// Initial render
// renderDecks();
//
//
//     // Select the elements to be translated
//     const elementsToTranslate = {
//         registrationTitle: document.querySelector('#home h1'),
//         usernameLabel: document.querySelector('tbody tr:nth-child(1) td:first-child strong'),
//         emailLabel: document.querySelector('tbody tr:nth-child(2) td:first-child strong'),
//         fullNameLabel: document.querySelector('tbody tr:nth-child(3) td:first-child strong'),
//         birthdateLabel: document.querySelector('tbody tr:nth-child(4) td:first-child strong'),
//         birthplaceLabel: document.querySelector('tbody tr:nth-child(5) td:first-child strong'),
//         phoneNumberLabel: document.querySelector('tbody tr:nth-child(6) td:first-child strong'),
//         editButtons: document.querySelectorAll('.data'),
//         homeLink: document.querySelector('nav a[href="index.html"]'),
//         deckbuilderLink: document.querySelector('nav a[href="deckbuilder.html"]'),
//         communityLink: document.querySelector('nav a[href="community.html"]'),
//         loginLink: document.querySelector('nav a[href="login.html"]'),
//         decksTitle: document.querySelector('#deck-list h1'), // Decks section title
//         deckNameHeader: document.querySelector('thead th:nth-child(1)'), // Table headers
//         deckTypesHeader: document.querySelector('thead th:nth-child(2)'),
//         deckActionsHeader: document.querySelector('thead th:nth-child(3)'),
//         publishButtons: document.querySelectorAll('.bi-share-fill + span'), // Buttons in deck actions
//         editDeckButtons: document.querySelectorAll('.bi-pencil-square + span'),
//         deleteDeckButtons: document.querySelectorAll('.bi-trash-fill + span'),
//     };
//
//     // Function to update the language
//     function switchLanguage(language) {
//         const translation = translations[language];
//         if (translation) {
//             if (elementsToTranslate.registrationTitle) {
//                 elementsToTranslate.registrationTitle.textContent = translation.registrationTitle;
//             }
//             if (elementsToTranslate.usernameLabel) {
//                 elementsToTranslate.usernameLabel.textContent = translation.usernameLabel;
//             }
//             if (elementsToTranslate.emailLabel) {
//                 elementsToTranslate.emailLabel.textContent = translation.emailLabel;
//             }
//             if (elementsToTranslate.fullNameLabel) {
//                 elementsToTranslate.fullNameLabel.textContent = translation.fullNameLabel;
//             }
//             if (elementsToTranslate.birthdateLabel) {
//                 elementsToTranslate.birthdateLabel.textContent = translation.birthdateLabel;
//             }
//             if (elementsToTranslate.birthplaceLabel) {
//                 elementsToTranslate.birthplaceLabel.textContent = translation.birthplaceLabel;
//             }
//             if (elementsToTranslate.phoneNumberLabel) {
//                 elementsToTranslate.phoneNumberLabel.textContent = translation.phoneNumberLabel;
//             }
//             // Iterate over all edit buttons and update the text
//             elementsToTranslate.editButtons.forEach(button => {
//                 button.querySelector('span').textContent = translation.editButton;
//             });
//
//             if (elementsToTranslate.homeLink) {
//                 elementsToTranslate.homeLink.textContent = translation.homeLink;
//             }
//             if (elementsToTranslate.deckbuilderLink) {
//                 elementsToTranslate.deckbuilderLink.textContent = translation.deckbuilderLink;
//             }
//             if (elementsToTranslate.communityLink) {
//                 elementsToTranslate.communityLink.textContent = translation.communityLink;
//             }
//             if (elementsToTranslate.loginLink) {
//                 elementsToTranslate.loginLink.textContent = translation.loginLink;
//             }
//             if (elementsToTranslate.decksTitle) {
//                 elementsToTranslate.decksTitle.textContent = translation.decksTitle;
//             }
//             if (elementsToTranslate.deckNameHeader) {
//                 elementsToTranslate.deckNameHeader.textContent = translation.deckNameHeader;
//             }
//             if (elementsToTranslate.deckTypesHeader) {
//                 elementsToTranslate.deckTypesHeader.textContent = translation.deckTypesHeader;
//             }
//             if (elementsToTranslate.deckActionsHeader) {
//                 elementsToTranslate.deckActionsHeader.textContent = translation.deckActionsHeader;
//             }
//             elementsToTranslate.publishButtons.forEach(button => {
//                 button.textContent = translation.publishButton;
//             });
//             elementsToTranslate.editDeckButtons.forEach(button => {
//                 button.textContent = translation.editDeckButton;
//             });
//             elementsToTranslate.deleteDeckButtons.forEach(button => {
//                 button.textContent = translation.deleteDeckButton;
//             });
//
//             if (elementsToTranslate.homeLink) {
//                 elementsToTranslate.homeLink.textContent = translation.homeLink;
//             }
//             if (elementsToTranslate.deckbuilderLink) {
//                 elementsToTranslate.deckbuilderLink.textContent = translation.deckbuilderLink;
//             }
//             if (elementsToTranslate.communityLink) {
//                 elementsToTranslate.communityLink.textContent = translation.communityLink;
//             }
//             if (elementsToTranslate.loginLink) {
//                 elementsToTranslate.loginLink.textContent = translation.loginLink;
//             }
//         }
//     }
//
//    // Aggiungi gli event listener per i pulsanti delle bandiere
//    document.querySelectorAll('#language-switch button').forEach(button => {
//     button.addEventListener('click', function() {
//         const language = this.querySelector('img').src.includes('it.png') ? 'it' : 'en';
//         switchLanguage(language);
//     });
// });
<<<<<<< Updated upstream
});

// Funzione di cambio lingua (flag switcher)
const languageSwitch = document.querySelectorAll("#language-switch button");
=======
//});

// Funzione di cambio lingua (flag switcher)
/*const languageSwitch = document.querySelectorAll("#language-switch button");
>>>>>>> Stashed changes
if (languageSwitch.length > 0) {
    languageSwitch.forEach((button) => {
        button.addEventListener("click", () => {
            const currentFlag = button.querySelector("img").getAttribute("src");
            if (currentFlag.includes("it")) {
                button.querySelector("img").setAttribute("src", "media/uk.png");
                // Aggiungi qui logica per cambiare effettivamente la lingua del sito
            } else {
                button.querySelector("img").setAttribute("src", "media/it.png");
                // Aggiungi qui logica per cambiare effettivamente la lingua del sito
            }
        });
    });
}
<<<<<<< Updated upstream

=======
*/
>>>>>>> Stashed changes

// Funzione per abilitare l'input
function enableInput() {
    document.getElementById("email-input").disabled = false;
    document.getElementById("firstName-input").disabled = false;
    document.getElementById("lastName-input").disabled = false;
    document.getElementById("dob-input").disabled = false;
    document.getElementById("phone-input").disabled = false;
    document.getElementById("password-input").disabled = false;
}

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
                document.getElementById("dob-input").value = data.dob.split('T')[0];
                document.getElementById("phone-input").value = data.phone;
            })

}

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
function deleteUser() {
    fetch('http://localhost:8080/api/auth/deleteSelf', {
        method: 'DELETE',
        headers: {
        }
    })
        .then(response => {
            if (response.ok) {
                alert("Eliminazione avvenuta con successo!");
                window.location.href = "login.html";
            }
        })
        .catch(error => {
            // Mostra un messaggio di errore
            errorMessage.textContent = error;
            errorModal.style.display = "block";
        });
}

// Funzione per gestire la conferma e l'azione
function confirmDelete() {
    if (confirm("Sei sicuro di voler procedere? Eliminando il tuo account perderai la tua collezione e i mazzi salvati!")) {
        deleteUser(); // Se l'utente conferma, esegui la funzione
    } else {
        alert("Operazione annullata."); // Messaggio se l'utente rifiuta
    }
}



