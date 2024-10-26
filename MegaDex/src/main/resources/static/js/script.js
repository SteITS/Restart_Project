document.addEventListener('DOMContentLoaded', () => {
    const cardContainers = document.querySelectorAll('.card-container');
    const deckName = document.getElementById('deck-name');
    const deckCreator = document.getElementById('deck-creator');
    const deckDate = document.getElementById('deck-date');
    const deckCount = document.getElementById('deck-count');
    const deckComments = document.getElementById('deck-comments');

    cardContainers.forEach(container => {
        container.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            if (card) {
                const name = card.querySelector('p').textContent;

                // Aggiorna le informazioni nel aside
                deckName.textContent = name; // Nome del mazzo
                deckCreator.textContent = "Utente1"; // Esempio, modifica secondo necessità
                deckDate.textContent = "15 settembre 2024"; // Esempio, modifica secondo necessità
                deckCount.textContent = "60"; // Esempio, modifica secondo necessità
                deckComments.textContent = "5"; // Esempio, modifica secondo necessità
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Definisci le traduzioni per italiano e inglese
    const translations = {
        it: {
            welcomeTitle: "Benvenuto su MegaDex!",
            welcomeMessage: "Esplora il mondo Pokémon e scopri tutto quello che c'è da sapere sui tuoi Pokémon preferiti.",
            searchTitle: "Cerca una Carta di Pokémon",
            searchPlaceholder: "Cerca una carta",
            searchButton: "Cerca",
            homeLink: "HOME",
            deckbuilderLink: "DECKBUILDER",
            communityLink: "COMMUNITY",
            loginLink: "AREA PERSONALE",
<<<<<<< Updated upstream
=======
			collectionLink: "RACCOGLITORE",
>>>>>>> Stashed changes
            footerTitle: "Multinazionalona SPA",
            footerAddress: "Via Esempio 123, 00100 Roma, Italia",
            footerPhone: "+39 012 3456789",
            footerEmail: "info@multinazionalona.it",
            sleevesTitle: "Esplora le carte",
<<<<<<< Updated upstream
            filterLabelSort: "Ordina per:",
            filterLabelType: "Tipo:",
            filterLabelSubtype: "Sottotipo:",
            filterLabelSupertype: "Supertipo:",
            filterLabelRelease: "Espansione:",
=======
			sortBy: "Ordina per:",
			filters: "Filters:",
			poss: "Possedute:",
			typeBy: "Tipo:",
			subtype:"Sottotipo:",
			supertype:"Supertipo:",
			expansion:"Espansione:",
>>>>>>> Stashed changes
            currentPageText: "Pagina 1 di "
        },
        en: {
            welcomeTitle: "Welcome to MegaDex!",
            welcomeMessage: "Explore the Pokémon world and discover everything about your favorite Pokémon.",
            searchTitle: "Search for a Pokémon Card",
            searchPlaceholder: "Search for a card",
            searchButton: "Search",
            homeLink: "HOME",
            deckbuilderLink: "DECKBUILDER",
            communityLink: "COMMUNITY",
            loginLink: "MY ACCOUNT",
<<<<<<< Updated upstream
=======
			collectionLink: "BINDER",
>>>>>>> Stashed changes
            footerTitle: "Multinazionalona SPA",
            footerAddress: "Via Example 123, 00100 Rome, Italy",
            footerPhone: "+39 012 3456789",
            footerEmail: "info@multinazionalona.it",
            sleevesTitle: "Explore the Cards",
<<<<<<< Updated upstream
            filterLabelSort: "Sort by:",
            filterLabelType: "Type:",
            filterLabelSubtype: "Subtype:",
            filterLabelSupertype: "Supertype:",
            filterLabelRelease: "Expansion:",
=======
			sortBy: "Sort by:",
			filters: "Filters:",
			poss: "Owned:",
			typeBy: "Type:",
			subtype:"Subtype:",
			supertype:"Supertype:",
			expansion:"Expansion:",
>>>>>>> Stashed changes
            currentPageText: "Page 1 of "
        }
    };

    // Seleziona gli elementi da tradurre
    const elementsToTranslate = {
        welcomeTitle: document.querySelector('#home h1'),
        welcomeMessage: document.querySelector('#home p'),
        searchTitle: document.querySelector('#sleeves h1'),  // Added the sleeves title
        searchPlaceholder: document.querySelector('#search-form1 input[name="card-search"]'),
        searchButton: document.querySelector('#search-form1 button'),
        homeLink: document.querySelector('nav ul li:nth-child(1) a'),
        deckbuilderLink: document.querySelector('nav ul li:nth-child(2) a'),
        communityLink: document.querySelector('nav ul li:nth-child(3) a'),
<<<<<<< Updated upstream
        loginLink: document.querySelector('nav ul li:nth-child(4) a'),
=======
		collectionLink: document.querySelector('nav ul li:nth-child(4) a'),
        loginLink: document.querySelector('nav ul li:nth-child(5) a'),
>>>>>>> Stashed changes
        footerTitle: document.querySelector('.footer-info h3'),
        footerAddress: document.querySelector('.footer-info p:nth-child(2)'),
        footerPhone: document.querySelector('.footer-info p:nth-child(3)'),
        footerEmail: document.querySelector('.footer-info p:nth-child(4)'),
        sleevesTitle: document.querySelector('#sleeves h1'), // Added the sleeves title
<<<<<<< Updated upstream
		filterLabelSort: document.querySelector('#sort-menu').previousSibling, // Ordina per
		    filterLabelType: document.querySelector('#filter-type').previousSibling, // Tipo
		    filterLabelSubtype: document.querySelector('#filter-subtype').previousElementSibling, // Sottotipo
		    filterLabelSupertype: document.querySelector('#filter-supertype').previousElementSibling, // Supertipo
		    filterLabelRelease: document.querySelector('#filter-release').previousElementSibling, // Espansione
		    currentPageText: document.querySelector('#current-page') // Pagina corrente
=======
		    currentPageText: document.querySelector('#current-page') // Pagina corrente

>>>>>>> Stashed changes
    };

    // Funzione per aggiornare la lingua della pagina
    function switchLanguage(language) {
        const translation = translations[language];

        elementsToTranslate.welcomeTitle.textContent = translation.welcomeTitle;
        elementsToTranslate.welcomeMessage.textContent = translation.welcomeMessage;
        elementsToTranslate.searchTitle.textContent = translation.searchTitle;
        elementsToTranslate.searchPlaceholder.placeholder = translation.searchPlaceholder;
        elementsToTranslate.searchButton.textContent = translation.searchButton;
        elementsToTranslate.homeLink.textContent = translation.homeLink;
        elementsToTranslate.deckbuilderLink.textContent = translation.deckbuilderLink;
        elementsToTranslate.communityLink.textContent = translation.communityLink;
        elementsToTranslate.loginLink.textContent = translation.loginLink;
<<<<<<< Updated upstream
        elementsToTranslate.footerTitle.textContent = translation.footerTitle;
        elementsToTranslate.footerAddress.textContent = translation.footerAddress;
        elementsToTranslate.footerPhone.textContent = translation.footerPhone;
        elementsToTranslate.footerEmail.textContent = translation.footerEmail;
=======
		elementsToTranslate.collectionLink.textContent = translation.collectionLink;
   /*     elementsToTranslate.footerTitle.textContent = translation.footerTitle;
        elementsToTranslate.footerAddress.textContent = translation.footerAddress;
        elementsToTranslate.footerPhone.textContent = translation.footerPhone;
        elementsToTranslate.footerEmail.textContent = translation.footerEmail; 
>>>>>>> Stashed changes
		elementsToTranslate.filterLabelSort.textContent = translation.filterLabelSort;
		        elementsToTranslate.filterLabelType.textContent = translation.filterLabelType;
		        elementsToTranslate.filterLabelSubtype.textContent = translation.filterLabelSubtype;
		        elementsToTranslate.filterLabelSupertype.textContent = translation.filterLabelSupertype;
		        elementsToTranslate.filterLabelRelease.textContent = translation.filterLabelRelease;
		        elementsToTranslate.currentPageText.textContent = `Pagina ${currentPage} di ${totalPages}`; // Assuming these variables are defined
<<<<<<< Updated upstream
=======
				*/document.querySelector('label[for="sort-menu"]').textContent = translation.sortBy;
				document.querySelector('label[for="filter-type"]').textContent = translation.typeBy;
				document.querySelector('label[for="filter-subtype"]').textContent = translation.subtype;
				document.querySelector('label[for="filter-supertype"]').textContent = translation.supertype;
				document.querySelector('label[for="filter-release"]').textContent = translation.expansion;
>>>>>>> Stashed changes
    }

    // Aggiungi gli event listener per i pulsanti delle bandiere
    document.querySelectorAll('#language-switch button').forEach(button => {
        button.addEventListener('click', function() {
            const language = this.querySelector('img').src.includes('it.png') ? 'it' : 'en';
            switchLanguage(language);
        });
    });
});

// Funzione di cambio lingua (flag switcher)
const languageSwitch = document.querySelectorAll("#language-switch button");
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
	
	let currentPage = 1; // Pagina corrente iniziale

	// Funzione per inviare la richiesta al controller con i parametri dei filtri
	async function searchCards(page = 1) {
	    // Prevenire il comportamento predefinito del form
	    const name = document.querySelector('input[name="card-search"]').value;
	    const orderBy = document.getElementById("sort-menu").value;
	    const type = document.getElementById("filter-type").value;
	    const subtype = document.getElementById("filter-subtype").value;
	    const supertype = document.getElementById("filter-supertype").value;
	    const release = document.getElementById("filter-release").value;

	    const params = new URLSearchParams({
	        name: name,
	        type: type,
	        subtype: subtype,
	        supertype: supertype,
	        set: release,
	        orderBy: orderBy === "Seleziona un'opzione" ? "Id" : orderBy.toLowerCase(),
	        direction: "asc",
	        page: page,
	    });


	    // Aggiungi parametri di ordinamento
	    // params.orderBy = orderBy === "Seleziona un'opzione" ? "Id" : orderBy.toLowerCase();
	    // params.direction = "asc";
	    // params.page = page;

	    try {
	        const response = await fetch(`http://localhost:8080/cards?${params.toString()}`);
	        if (!response.ok) {
	            throw new Error("Errore durante il recupero delle carte");
	        }
	        const data = await response.json();
	        updateCardList(data.cards);
	        updatePagination(data.totalPages); // Passa il numero totale di pagine
	    } catch (error) {
	        console.error("Errore:", error);
	    }
	}

	// Funzione per aggiornare la lista delle carte in base ai risultati della ricerca
	function updateCardList(cards) {
	    const cardListContainer = document.querySelector('.card-list');
	    cardListContainer.innerHTML = '';

	    if (!cards.length) {
	        cardListContainer.innerHTML = '<p>Nessuna carta trovata.</p>';
	        return;
	    }

	    cards.forEach(card => {
	        const cardElement = document.createElement('div');
	        cardElement.classList.add('card-item');
	        cardElement.innerHTML = `
	        <div class="card">
	        <img src="${card.img}" alt="">      
	        </div>
	      `;
	        cardListContainer.appendChild(cardElement);
	    });
	}


	// Funzione per aggiornare i bottoni di navigazione
	function updatePagination(totalPages) {
	    const prevButton = document.getElementById('prev-page');
	    const nextButton = document.getElementById('next-page');
	    const currentPageDisplay = document.getElementById('current-page');

	    currentPageDisplay.innerText = `Pagina ${currentPage} di ${totalPages}`;

	    // Abilita/disabilita i bottoni in base alla pagina corrente
	    prevButton.disabled = currentPage === 1;
	    nextButton.disabled = currentPage === totalPages;
	}

	// Event listeners per i bottoni di navigazione
	document.getElementById('prev-page').addEventListener('click', () => {
	    if (currentPage > 1) {
	        currentPage--;
	        searchCards(currentPage);
	    }
	});

	document.getElementById('next-page').addEventListener('click', () => {
	    currentPage++;
	    searchCards(currentPage);
	});

	// Aggiungi l'evento submit al form di ricerca
	document.getElementById('search-form1').addEventListener('submit', (event) => {
	    event.preventDefault();
	    currentPage = 1; // Resetta la pagina a 1 quando si effettua una nuova ricerca
	    searchCards(currentPage);
	});
