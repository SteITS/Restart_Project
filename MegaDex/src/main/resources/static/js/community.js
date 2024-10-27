const decks = [
    {
        name: 'Dragofiamma',
        types: 'Fuoco, Drago',
        author: 'FireLord99',
        cards: [
            { name: 'Charizard', type: 'Fuoco', quantity: 2, rarity: 'Rara' },
            { name: 'Blaziken', type: 'Fuoco', quantity: 1, rarity: 'Unica' },
            { name: 'Charmander', type: 'Fuoco', quantity: 4, rarity: 'Comune' },
            { name: 'Magmar', type: 'Fuoco', quantity: 4, rarity: 'Comune' },
            { name: 'Salamence', type: 'Drago', quantity: 3, rarity: 'Rara' },
            { name: 'Dratini', type: 'Drago', quantity: 4, rarity: 'Comune' },
            { name: 'Dragonite', type: 'Drago', quantity: 2, rarity: 'Rara' },
            { name: 'Torchic', type: 'Fuoco', quantity: 4, rarity: 'Comune' },
            { name: 'Combusken', type: 'Fuoco', quantity: 3, rarity: 'Non Comune' },
            { name: 'Dragonair', type: 'Drago', quantity: 4, rarity: 'Comune' },
            { name: 'Flareon', type: 'Fuoco', quantity: 3, rarity: 'Non Comune' },
            { name: 'Growlithe', type: 'Fuoco', quantity: 4, rarity: 'Comune' },
            { name: 'Arcanine', type: 'Fuoco', quantity: 2, rarity: 'Rara' },
            { name: 'Altaria', type: 'Drago', quantity: 3, rarity: 'Non Comune' },
            { name: 'Heatmor', type: 'Fuoco', quantity: 3, rarity: 'Non Comune' },
            { name: 'Reshiram', type: 'Drago', quantity: 1, rarity: 'Unica' },
            { name: 'Latios', type: 'Drago', quantity: 1, rarity: 'Unica' },
        ]
    },
    {
        name: 'AquaForce',
        types: 'Acqua, Ghiaccio',
        author: 'WaterWiz87',
        cards: [
            { name: 'Gyarados', type: 'Acqua', quantity: 1, rarity: 'Rara' },
            { name: 'Articuno', type: 'Ghiaccio', quantity: 1, rarity: 'Unica' },
            { name: 'Squirtle', type: 'Acqua', quantity: 4, rarity: 'Comune' },
            { name: 'Wartortle', type: 'Acqua', quantity: 3, rarity: 'Non Comune' },
            { name: 'Lapras', type: 'Acqua', quantity: 3, rarity: 'Rara' },
            { name: 'Seel', type: 'Ghiaccio', quantity: 4, rarity: 'Comune' },
            { name: 'Dewgong', type: 'Ghiaccio', quantity: 2, rarity: 'Non Comune' },
            { name: 'Vaporeon', type: 'Acqua', quantity: 2, rarity: 'Rara' },
            { name: 'Piplup', type: 'Acqua', quantity: 4, rarity: 'Comune' },
            { name: 'Prinplup', type: 'Acqua', quantity: 3, rarity: 'Non Comune' },
            { name: 'Empoleon', type: 'Acqua', quantity: 2, rarity: 'Rara' },
            { name: 'Totodile', type: 'Acqua', quantity: 4, rarity: 'Comune' },
            { name: 'Croconaw', type: 'Acqua', quantity: 3, rarity: 'Non Comune' },
            { name: 'Feraligatr', type: 'Acqua', quantity: 2, rarity: 'Rara' },
            { name: 'Kyogre', type: 'Acqua', quantity: 1, rarity: 'Unica' },
            { name: 'Glaceon', type: 'Ghiaccio', quantity: 3, rarity: 'Non Comune' },
            { name: 'Suicune', type: 'Acqua', quantity: 1, rarity: 'Unica' },
        ]
    },
    {
        name: 'TerraFuria',
        types: 'Terra, Roccia',
        author: 'StoneCrusher21',
        cards: [
            { name: 'Tyranitar', type: 'Roccia', quantity: 2, rarity: 'Rara' },
            { name: 'Groudon', type: 'Terra', quantity: 1, rarity: 'Unica' },
            { name: 'Geodude', type: 'Roccia', quantity: 4, rarity: 'Comune' },
            { name: 'Graveler', type: 'Roccia', quantity: 3, rarity: 'Non Comune' },
            { name: 'Golem', type: 'Roccia', quantity: 2, rarity: 'Rara' },
            { name: 'Sandshrew', type: 'Terra', quantity: 4, rarity: 'Comune' },
            { name: 'Sandslash', type: 'Terra', quantity: 3, rarity: 'Non Comune' },
            { name: 'Onix', type: 'Roccia', quantity: 4, rarity: 'Comune' },
            { name: 'Steelix', type: 'Roccia', quantity: 2, rarity: 'Rara' },
            { name: 'Diglett', type: 'Terra', quantity: 4, rarity: 'Comune' },
            { name: 'Dugtrio', type: 'Terra', quantity: 3, rarity: 'Non Comune' },
            { name: 'Cubone', type: 'Terra', quantity: 4, rarity: 'Comune' },
            { name: 'Marowak', type: 'Terra', quantity: 3, rarity: 'Non Comune' },
            { name: 'Rhydon', type: 'Roccia', quantity: 2, rarity: 'Rara' },
            { name: 'Rhyhorn', type: 'Roccia', quantity: 4, rarity: 'Comune' },
            { name: 'Regirock', type: 'Roccia', quantity: 1, rarity: 'Unica' },
        ]
    },
    {
        name: 'ElettroColpo',
        types: 'Elettro',
        author: 'ThunderStrikeX',
        cards: [
            { name: 'Pikachu', type: 'Elettro', quantity: 3, rarity: 'Comune' },
            { name: 'Zekrom', type: 'Elettro', quantity: 1, rarity: 'Rara' },
            { name: 'Magnemite', type: 'Elettro', quantity: 4, rarity: 'Comune' },
            { name: 'Magneton', type: 'Elettro', quantity: 3, rarity: 'Non Comune' },
            { name: 'Magnezone', type: 'Elettro', quantity: 2, rarity: 'Rara' },
            { name: 'Electabuzz', type: 'Elettro', quantity: 4, rarity: 'Comune' },
            { name: 'Electivire', type: 'Elettro', quantity: 2, rarity: 'Rara' },
            { name: 'Raichu', type: 'Elettro', quantity: 2, rarity: 'Rara' },
            { name: 'Voltorb', type: 'Elettro', quantity: 4, rarity: 'Comune' },
            { name: 'Electrode', type: 'Elettro', quantity: 3, rarity: 'Non Comune' },
            { name: 'Jolteon', type: 'Elettro', quantity: 3, rarity: 'Non Comune' },
            { name: 'Rotom', type: 'Elettro', quantity: 3, rarity: 'Non Comune' },
            { name: 'Zapdos', type: 'Elettro', quantity: 1, rarity: 'Unica' },
            { name: 'Ampharos', type: 'Elettro', quantity: 2, rarity: 'Rara' },
            { name: 'Luxray', type: 'Elettro', quantity: 2, rarity: 'Rara' },
            { name: 'Manectric', type: 'Elettro', quantity: 2, rarity: 'Rara' },
        ]
    },
    {
        name: 'VelenoNatura',
        types: 'Veleno, Erba',
        author: 'ToxicQueen23',
        cards: [
            { name: 'Roserade', type: 'Erba', quantity: 2, rarity: 'Rara' },
            { name: 'Gengar', type: 'Veleno', quantity: 1, rarity: 'Unica' },
            { name: 'Bulbasaur', type: 'Erba', quantity: 4, rarity: 'Comune' },
            { name: 'Ivysaur', type: 'Erba', quantity: 3, rarity: 'Non Comune' },
            { name: 'Venusaur', type: 'Erba', quantity: 2, rarity: 'Rara' },
            { name: 'Oddish', type: 'Erba', quantity: 4, rarity: 'Comune' },
            { name: 'Gloom', type: 'Erba', quantity: 3, rarity: 'Non Comune' },
            { name: 'Vileplume', type: 'Erba', quantity: 2, rarity: 'Rara' },
            { name: 'Ekans', type: 'Veleno', quantity: 4, rarity: 'Comune' },
            { name: 'Arbok', type: 'Veleno', quantity: 3, rarity: 'Non Comune' },
            { name: 'Weedle', type: 'Erba', quantity: 4, rarity: 'Comune' },
            { name: 'Kakuna', type: 'Erba', quantity: 3, rarity: 'Non Comune' },
            { name: 'Beedrill', type: 'Erba', quantity: 2, rarity: 'Rara' },
            { name: 'Zubat', type: 'Veleno', quantity: 4, rarity: 'Comune' },
            { name: 'Golbat', type: 'Veleno', quantity: 3, rarity: 'Non Comune' },
            { name: 'Crobat', type: 'Veleno', quantity: 2, rarity: 'Rara' },
            { name: 'Toxicroak', type: 'Veleno', quantity: 1, rarity: 'Unica' },
        ]
    },
];

function renderDecks() {
    const tableBody = document.querySelector('#deck-list tbody');
    tableBody.innerHTML = '';

    decks.forEach(deck => {
        const row = document.createElement('tr');
        row.classList.add('deck-row');
        row.setAttribute('data-deck', deck.name);
        row.innerHTML = `
            <td>${deck.name}</td>
            <td>${deck.types}</td>
            <td>${deck.author}</td>
            <td class="button-group">
                <button class="comm-btn" onclick="likeDeck('${deck.name}')"><i class="bi bi-hand-thumbs-up-fill"></i><span> Mi Piace</span></button>
                <button class="comm-btn" onclick="downloadDeck('${deck.name}')"><i class="bi bi-hand-thumbs-down-fill"></i><span> Non Mi Piace</span></button>
            </td>
        `;
        
        row.addEventListener('click', () => toggleDeckDetails(deck.name));
        
        tableBody.appendChild(row);
    });
}

function toggleDeckDetails(deckName) {
    const detailsRow = document.querySelector(`tr[data-deck="details-${deckName}"]`);
    if (detailsRow) {
        detailsRow.style.display = detailsRow.style.display === 'none' || detailsRow.style.display === '' ? 'table-row' : 'none';
    } else {
        const deck = decks.find(d => d.name === deckName);
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-deck', `details-${deckName}`);
        newRow.classList.add('details-row');
        newRow.style.display = 'table-row'; // Show the row
        newRow.innerHTML = `
    <td colspan="4" class="card-details-inner">
        <table >
            <tbody>
                ${deck.cards.map(card => `
                    <tr>
                        <td><strong>Nome: </strong>${card.name}</td><td> <strong>Tipo: </strong> ${card.type}</td><td> <strong>Quantità: </strong>${card.quantity}</td><td> <strong>Rarità: </strong> ${card.rarity}</td> 
                    </tr>
                `).join('')}
            </tbody>
        </table>
    </td>
`;

        
        const row = document.querySelector(`tr[data-deck="${deckName}"]`);
        row.insertAdjacentElement('afterend', newRow);
    }
}

// Initial render
renderDecks();

document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        it: {
            searchTitle: "Cerca un mazzo o un autore",
            searchPlaceholder: "Cerca un mazzo o un autore",
            searchButton: "Cerca",
            deckListTitle: "Mazzi della community",
            tableHeaders: {
                nameDeck: "Nome Mazzo",
                types: "Tipi",
                author: "Autore",
                actions: "Azioni"
            },
            actionButtons: ["Mi Piace", "Non Mi Piace"],
            home: "HOME",
                deckbuilder: "DECKBUILDER",
                community: "COMMUNITY",
                collezione: "COLLEZIONE",
                personalArea: "AREA PERSONALE"
        },
        en: {
            searchTitle: "Search for a deck or author",
            searchPlaceholder: "Search for a deck or author",
            searchButton: "Search",
            deckListTitle: "Community Decks",
            tableHeaders: {
                nameDeck: "Deck Name",
                types: "Types",
                author: "Author",
                actions: "Actions"
            },
            actionButtons: ["Like", "Dislike"],
            home: "HOME",
                deckbuilder: "DECKBUILDER",
                community: "COMMUNITY",
                collezione: "BINDER",
                personalArea: "MY ACCOUNT"
        }
    };

    const elementsToTranslate = {
        welcomeTitle: document.querySelector('#home h1'),
        searchPlaceholder: document.querySelector('#search-form input[name="find"]'),
        searchButton: document.querySelector('#search-form button'),
        deckListTitle: document.querySelector('#deck-list h1'),
        tableHeaders: {
            nameDeck: document.querySelector('thead th:nth-child(1)'),
            types: document.querySelector('thead th:nth-child(2)'),
            author: document.querySelector('thead th:nth-child(3)'),
            actions: document.querySelector('thead th:nth-child(4)')
        }
    };

    // Funzione per aggiornare la lingua della pagina
    function switchLanguage(language) {
        const translation = translations[language];

        elementsToTranslate.welcomeTitle.textContent = translation.searchTitle;
        elementsToTranslate.searchPlaceholder.placeholder = translation.searchPlaceholder;
        elementsToTranslate.searchButton.textContent = translation.searchButton;
        elementsToTranslate.deckListTitle.textContent = translation.deckListTitle;

        elementsToTranslate.tableHeaders.nameDeck.textContent = translation.tableHeaders.nameDeck;
        elementsToTranslate.tableHeaders.types.textContent = translation.tableHeaders.types;
        elementsToTranslate.tableHeaders.author.textContent = translation.tableHeaders.author;
        elementsToTranslate.tableHeaders.actions.textContent = translation.tableHeaders.actions;

        // Seleziona tutte le righe della tabella che contengono pulsanti azione
        const allRows = document.querySelectorAll('tbody tr');
        
        allRows.forEach(row => {
            const buttons = row.querySelectorAll('.button-group button span');
            buttons.forEach((button, index) => {
                if (translation.actionButtons[index]) {
                    button.textContent = translation.actionButtons[index];
                }
            });
        });

        document.querySelector('nav ul li:nth-child(1) a').textContent = translation.home;
        document.querySelector('nav ul li:nth-child(2) a').textContent = translation.deckbuilder;
        document.querySelector('nav ul li:nth-child(3) a').textContent = translation.community;
        document.querySelector('nav ul li:nth-child(4) a').textContent = translation.collezione;
        document.querySelector('nav ul li:nth-child(5) a').textContent = translation.personalArea;
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
