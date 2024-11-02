document.addEventListener('DOMContentLoaded', () => {
	searchCards();
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

//funzione per mostrare la carta selezionata
async function selectCard(cardId) {
    document.getElementById('card-details').style.display = 'block';
    const param = new URLSearchParams({id: cardId})
    let card;
    try {
        const response = await fetch(`http://localhost:8080/api/deb/cardById?${param.toString()}`);
        if (!response.ok) {
            throw new Error("Errore durante il recupero della carta");
        }
        card = await response.json();
    } catch (error) {
        console.error("Errore:", error);
    }

    const cardContainer = document.querySelector('.card-details');
    cardContainer.innerHTML = '';

    const cardElement = document.createElement('div');
    cardElement.classList.add('card-item');
    cardElement.innerHTML = `
        <div class="selected-card">
        <img src="${card.img}" alt="">
        </div>
       <div class="card-sheet">
    <table>
        <tbody>
            ${card.id ? `
                <tr>
                    <td><strong>Id:</strong></td>
                    <td>${card.id}</td>
                </tr>
                ` : ''}
            ${card.set ? `
                <tr>
                    <td><strong>Set:</strong></td>
                    <td>${card.set}</td>
                </tr>
                ` : ''}
            ${card.series ? `
                <tr>
                    <td><strong>Serie:</strong></td>
                    <td>${card.series}</td>
                </tr>
                ` : ''}
            ${card.publisher ? `
                <tr>
                    <td><strong>Publisher:</strong></td>
                    <td>${card.publisher}</td>
                </tr>
                ` : ''}
            ${card.generation ? `
                <tr>
                    <td><strong>Generazione:</strong></td>
                    <td>${card.generation}</td>
                </tr>
                ` : ''}
            ${card.release_date ? `
                <tr>
                    <td><strong>Data di rilascio:</strong></td>
                    <td>${card.release_date}</td>
                </tr>
                ` : ''}
            ${card.artist ? `
                <tr>
                    <td><strong>Artista:</strong></td>
                    <td>${card.artist}</td>
                </tr>
                ` : ''}
            ${card.name ? `
                <tr>
                    <td><strong>Nome:</strong></td>
                    <td>${card.name}</td>
                </tr>
                ` : ''}
            ${card.set_num ? `
                <tr>
                    <td><strong>Numero del set:</strong></td>
                    <td>${card.set_num}</td>
                </tr>
                ` : ''}
            ${card.level ? `
                <tr>
                    <td><strong>Livello:</strong></td>
                    <td>${card.level}</td>
                </tr>
                ` : ''}
            ${card.hp ? `
                <tr>
                    <td><strong>Punti vita:</strong></td>
                    <td>${card.hp}</td>
                </tr>
                ` : ''}
            ${card.evolves_from ? `
                <tr>
                    <td><strong>Evoluzione da:</strong></td>
                    <td>${card.evolves_from}</td>
                </tr>
                ` : ''}
            ${card.evolves_to ? `
                <tr>
                    <td><strong>Evoluzione a:</strong></td>
                    <td>${card.evolves_to}</td>
                </tr>
                ` : ''}
            ${card.retreat_cost ? `
                <tr>
                    <td><strong>Costo di ritirata:</strong></td>
                    <td>${card.retreat_cost}</td>
                </tr>
                ` : ''}
            ${card.converted_retreat_cost ? `
                <tr>
                    <td><strong>Costo di ritirata convertito:</strong></td>
                    <td>${card.converted_retreat_cost}</td>
                </tr>
                ` : ''}
            ${card.rarity ? `
                <tr>
                    <td><strong>Rarità:</strong></td>
                    <td>${card.rarity}</td>
                </tr>
                ` : ''}
            ${card.flavor_text ? `
                <tr>
                    <td><strong>Testo descrittivo:</strong></td>
                    <td>${card.flavor_text}</td>
                </tr>
                ` : ''}
            ${card.national_pokedex_numbers ? `
                <tr>
                    <td><strong>Numero nel Pokédex nazionale:</strong></td>
                    <td>${card.national_pokedex_numbers}</td>
                </tr>    
                ` : ''}
            ${card.legalities ? `
                <tr>
                    <td><strong>Legalità:</strong></td>
                    <td>${card.legalities}</td>
                </tr>    
                ` : ''}
                ${card.rules ? `
                    <tr>
                    <td><strong>Regole:</strong></td>
                    <td>${card.rules}</td>
                    </tr>
                ` : ''}
                ${card.regulation_mark ? `
                    <tr>
                    <td><strong>Marchio di regolamento:</strong></td>
                    <td>${card.regulation_mark}</td>
                    </tr>
                ` : ''}
                ${card.ancient_trait ? `
                       <tr>
                       <td><strong>Tratto antico:</strong></td>
                       <td>${card.ancient_trait}</td>
                       </tr>
                ` : ''}
                
                ${!(card.attacks.length === 0) && card.attacks ? `<tr><td><strong>Attacchi:</strong></td><td>` : ''}
                ${!(card.attacks.length === 0) && card.attacks ? card.attacks.map(a =>
        `
                                <table>
                                    <tbody>
                                        <tr><td colspan="2"><strong>${a.attack_name}</strong></td></tr>
                                        <tr><td><strong>Costo:</strong></td><td>${a.cost}</td></tr>
                                        <tr><td><strong>Danno:</strong></td><td>${a.damage}</td></tr>
                                        <tr><td><strong>Costo Convertito:</strong></td><td>${a.convertedEnergyCost}</td></tr>
                                        <tr><td colspan="2">${a.text}</td></tr>
                                    </tbody>
                                </table>                                
                                `
    ).join('') : ''}
                ${!(card.attacks.length === 0) && card.attacks ? `</td></tr>` : ''}
                ${!(card.abilities.length === 0) && card.abilities ? `<tr><td><strong>Abilità:</strong></td><td>` : ''}
                ${!(card.abilities.length === 0) && card.abilities ? card.abilities.map(a =>
        `
                                    <table>
                                       <tbody>
                                           <tr><td colspan="2"><strong>${a.name}</strong></td></tr>
                                           <tr><td colspan="2">${a.text}</td></tr>
                                           <tr><td><strong>Tipo:</strong></td><td>${a.type}</td></tr>
                                       </tbody>
                                    </table>
                                    `
    ).join('') : ''}
                ${!(card.abilities.length === 0) && card.abilities ? `</td></tr>` : ''}
            ${!(card.weaknesses.length === 0) && card.weaknesses ? `<tr><td><strong>Debolezze:</strong></td><td>` : ''}    
            ${!(card.weaknesses.length === 0) && card.weaknesses ? card.weaknesses.map(a =>
        `
                                    <table>
                                       <tbody>
                                             <tr><td><strong>Tipo:</strong></td><td>${a.text}</td></tr>
                                             <tr><td><strong>Valore:</strong></td><td>${a.value}</td></tr>
                                       </tbody>
                                    </table>
                                    `
    ).join('') : ''}
            ${!(card.weaknesses.length === 0) && card.weaknesses ? `</td></tr>` : ''}
            ${!(card.resistances.length === 0) && card.resistances ? `<tr><td><strong>Resistenze:</strong></td><td>` : ''}
            ${!(card.resistances.length === 0) && card.resistances ? card.resistances.map(a =>
        `
                                    <table>
                                       <tbody>
                                             <tr><td><strong>Tipo:</strong></td><td>${a.type}</td></tr>
                                             <tr><td><strong>Valore:</strong></td><td>${a.value}</td></tr>
                                       </tbody>
                                    </table>
                                    `
    ).join('') : ''}
        ${!(card.resistances.length === 0) && card.resistances ? `</td></tr>` : ''}
        ${!(card.types.length === 0) && card.types ? `<tr><td><strong>Tipi:</strong></td><td>` : ''}        
            ${!(card.types.length === 0) && card.types ? card.types.map(a =>
        `
                                        <table>
                                           <tbody>
                                                 <tr>${a.name}</tr>
                                           </tbody>
                                        </table>
                                        `
    ).join('') : ''}
            ${!(card.types.length === 0) && card.types ? `</td></tr>` : ''}
            ${!(card.subtypes.length === 0) && card.subtypes ? `<tr><td><strong>Sottotipi:</strong></td><td>` : ''}     
            ${!(card.subtypes.length === 0) && card.subtypes ? card.subtypes.map(a =>
        `
                <table>
                   <tbody>
                         <tr>${a.name}</tr>
                   </tbody>
                </table>
                `
    ).join('') : ''}
        ${!(card.subtypes.length === 0) && card.subtypes ? `</td></tr>` : ''}        
            <tr>
                <td><strong>Supertipo:</strong></td>
                <td>${card.supertype.name}</td>
            </tr>
        </tbody>
    </table>
</div>
    </div> 
      `;
    cardContainer.appendChild(cardElement);
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
	        <img src="${card.img}" alt="" onclick="selectCard('${card.id}')">      
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
