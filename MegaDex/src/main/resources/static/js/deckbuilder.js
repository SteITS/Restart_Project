document.addEventListener('DOMContentLoaded', () => {
    const cardList = document.querySelector('.card-list');
    const selectedCardList = document.getElementById('selected-card-list');
    const selectedCards = {}; // Oggetto per tenere traccia delle carte selezionate
    let cardCount = 0; // Conta le carte selezionate

    // Funzione per creare l'elemento della carta selezionata
    function createSelectedCard(cardName) {
        const li = document.createElement('li');
        li.setAttribute('data-card-name', cardName);

        // Crea il numero delle carte
        const cardCountSpan = document.createElement('span');
        cardCountSpan.classList.add('card-count');
        cardCountSpan.textContent = '1';

        // Crea il nome della carta
        const cardNameSpan = document.createElement('span');
        cardNameSpan.classList.add('card-name');
        cardNameSpan.textContent = cardName;

        // Crea un pulsante per rimuovere la carta
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => {
            const count = parseInt(cardCountSpan.textContent);

            if (count > 1) {
                cardCountSpan.textContent = count - 1; // Riduce il conteggio
            } else {
                li.remove(); // Rimuove l'elemento se non ci sono più carte
                delete selectedCards[cardName]; // Rimuove la carta dall'oggetto
            }

            cardCount--; // Riduce il conteggio totale delle carte
        });

        // Appendi il numero, nome e pulsante all'elemento <li>
        li.appendChild(cardCountSpan);
        li.appendChild(cardNameSpan);
        li.appendChild(removeButton);

        // Aggiunge la carta selezionata alla lista
        selectedCardList.appendChild(li);
    }

    // Event listener per la selezione di una carta
    cardList.addEventListener('click', (event) => {
        if (event.target.closest('.card')) {
            const cardElement = event.target.closest('.card');
            const cardName = cardElement.querySelector('p').textContent;

            // Controlla il limite massimo di 60 carte
            if (cardCount >= 60) {
                alert('Hai raggiunto il limite di 60 carte!');
                return;
            }

            if (selectedCards[cardName]) {
                // Se la carta esiste già, aggiorna il conteggio
                const li = selectedCardList.querySelector(`li[data-card-name="${cardName}"]`);
                const cardCountElement = li.querySelector('.card-count');
                cardCountElement.textContent = parseInt(cardCountElement.textContent) + 1;
            } else {
                // Se la carta non esiste, la crea
                selectedCards[cardName] = 1;
                createSelectedCard(cardName);
            }

            cardCount++; // Incrementa il conteggio totale delle carte
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    // Oggetto per le traduzioni
    const translations = {
        it: {
            header: {
                home: "HOME",
                deckbuilder: "DECKBUILDER",
                community: "COMMUNITY",
                collezione: "COLLEZIONE",
                personalArea: "AREA PERSONALE"
            },
            buildDeck: "Costruisci il tuo mazzo",
            search: {
                placeholder: "Cerca una carta",
                button: "Cerca"
            },
            sortBy: "Ordina per:",
            filters: "Filtri:",
            filterOptions: {
                default: "Seleziona un filtro",
                typology: "Tipologia carta",
                subtype: "Sottotipo carta",
                format: "Formato",
                type: "Tipo carta",
                edition: "Edizione",
                pokemon: "Pokémon",
                releaseDate: "Data rilascio"
            },
            sortOptions: {
                default: "Seleziona un'opzione",
                name: "Per nome",
                text: "Per testo",
                typology: "Per tipologia",
                type: "Per tipo",
                evolution: "Per evoluzione"
            },
            selectedCards: "Carte Selezionate",
            buttons: {
                save: "Salva",
                export: "Esporta",
                import: "Importa",
                importDeck: "Importa mazzo"
            },
            import: {
                placeholder: "Inserisci link",
                button: "Importa"
            }
        },
        en: {
            header: {
                home: "HOME",
                deckbuilder: "DECKBUILDER",
                community: "COMMUNITY",
                collezione: "BINDER",
                personalArea: "MY ACCOUNT"
            },
            buildDeck: "Build your deck",
            search: {
                placeholder: "Search for a card",
                button: "Search"
            },
            sortBy: "Sort by:",
            filters: "Filters:",
            filterOptions: {
                default: "Select a filter",
                typology: "Card typology",
                subtype: "Card subtype",
                format: "Format",
                type: "Card type",
                edition: "Edition",
                pokemon: "Pokémon",
                releaseDate: "Release date"
            },
            sortOptions: {
                default: "Select an option",
                name: "By name",
                text: "By text",
                typology: "By typology",
                type: "By type",
                evolution: "By evolution"
            },
            selectedCards: "Selected Cards",
            buttons: {
                save: "Save",
                export: "Export",
                import: "Import",
                importDeck: "Import deck"
            },
            import: {
                placeholder: "Insert link",
                button: "Import"
            }
        }
    };
    

    // Funzione per aggiornare la lingua della pagina
    function switchLanguage(language) {
        const translation = translations[language];

        // Cambia i testi della navbar
        document.querySelector('nav ul li:nth-child(1) a').textContent = translation.header.home;
        document.querySelector('nav ul li:nth-child(2) a').textContent = translation.header.deckbuilder;
        document.querySelector('nav ul li:nth-child(3) a').textContent = translation.header.community;
        document.querySelector('nav ul li:nth-child(4) a').textContent = translation.header.collezione;
        document.querySelector('nav ul li:nth-child(5) a').textContent = translation.header.personalArea;

        // Cambia i testi delle varie sezioni
        document.querySelector('#deckbuilder h1').textContent = translation.buildDeck;
        document.querySelector('#search-form1 input').placeholder = translation.search.placeholder;
        document.querySelector('#search-form1 button').textContent = translation.search.button;
        document.querySelector('label[for="sort-menu"]').textContent = translation.sortBy;
        document.querySelector('label[for="filter-menu"]').textContent = translation.filters;
        document.querySelector('.selected-cards h2').textContent = translation.selectedCards;

        // Cambia i testi dei pulsanti
        const buttons = document.querySelectorAll('.button-deck');
        if (buttons.length >= 3) { // Controlla se ci sono abbastanza pulsanti
            buttons[0].textContent = translation.buttons.save;
            buttons[1].textContent = translation.buttons.export;
            buttons[2].textContent = translation.buttons.import;
        }

        document.querySelector('#search-form2 h2').textContent = translation.buttons.importDeck;
        document.querySelector('#search-form2 input').placeholder = translation.import.placeholder;
        
        // Cambia le opzioni dei filtri
        const filterMenu = document.querySelector('#filter-menu');
        if (filterMenu && filterMenu.options.length >= 8) { // Controlla se il menu a tendina ha opzioni
            filterMenu.options[0].textContent = translation.filterOptions.default;
            filterMenu.options[1].textContent = translation.filterOptions.typology;
            filterMenu.options[2].textContent = translation.filterOptions.subtype;
            filterMenu.options[3].textContent = translation.filterOptions.format;
            filterMenu.options[4].textContent = translation.filterOptions.type;
            filterMenu.options[5].textContent = translation.filterOptions.edition;
            filterMenu.options[6].textContent = translation.filterOptions.pokemon;
            filterMenu.options[7].textContent = translation.filterOptions.releaseDate;
        }

        // Cambia le opzioni di ordinamento
        const sortMenu = document.querySelector('#sort-menu');
        if (sortMenu && sortMenu.options.length >= 6) { // Controlla se il menu a tendina ha opzioni
            sortMenu.options[0].textContent = translation.sortOptions.default;
            sortMenu.options[1].textContent = translation.sortOptions.name;
            sortMenu.options[2].textContent = translation.sortOptions.text;
            sortMenu.options[3].textContent = translation.sortOptions.typology;
            sortMenu.options[4].textContent = translation.sortOptions.type;
            sortMenu.options[5].textContent = translation.sortOptions.evolution;
        }
    }

    // Aggiungi l'event listener per il cambio di lingua
    const languageSwitch = document.querySelector("#switch-lang");
    if (languageSwitch) {
        languageSwitch.addEventListener("click", function () {
            const currentFlag = document.querySelector("#flag-image").src;
            if (currentFlag.includes("it.png")) {
                document.querySelector("#flag-image").src = "media/uk.png";
                switchLanguage("en");
            } else {
                document.querySelector("#flag-image").src = "media/it.png";
                switchLanguage("it");
            }
        });
    }

});
