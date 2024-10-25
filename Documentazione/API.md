# Documentazione API
Questa documentazione fornisce una panoramica completa delle API disponibili per la gestione di utenti, carte e deck all'interno della nostra applicazione. Le API sono suddivise in diverse categorie in base ai metodi HTTP utilizzati, consentendo l'accesso ai dati e l'esecuzione di operazioni come il recupero, l'aggiunta, l'aggiornamento e la rimozione di risorse. <br>
<span style="color:red"> Importante: </span> È importante notare che tutte le API che iniziano con ``/auth`` richiedono l'autenticazione dell'utente per poter essere utilizzate.
## Indice
- [GET Endpoints](#get-endpoints)
  - [/login.html?logout](#loginhtmllogout)
  - [/success](#success)
  - [/cards](#cards)
  - [/api/auth/filtered-in-sleeves](#apiauthfiltered-in-sleeves)
  - [/api/deb/cardById](#apidebcardbyid)
  - [/api/deb/users](#apidebusers)
  - [/api/auth/authUser](#apiauthauthuser)
  - [/api/auth/mySleeves](#apiauthmysleeves)
  - [/api/auth/mySleeve](#apiauthmysleeve)
  - [/api/deb/ratings](#apidebratings)
- [POST Endpoints](#post-endpoints)
  - [/register/save](#registersave)
  - [/login](#login)
  - [/api/auth/decksByUser](#apiauthdecksbyuser)
  - [/api/auth/addDeck](#apiauthadddeck)
  - [/api/deb/removeDeck](#apidebremovedeck)
  - [/api/deb/validateDeck](#apidebvalidatedeck)
  - [/api/deb/getRatingsByDeck](#apidebgetratingsbydeck)
  - [/api/auth/updateRating](#apiauthupdaterating)
  - [/api/auth/removeRating](#apiauthremoverating)
  - [/api/auth/updateSleeve](#apiauthupdatesleeve)
  - [/api/auth/removeSleeve](#apiauthremovesleeve)
  - [/api/auth/updateSlot](#apiauthupdateslot)
  - [/api/auth/removeSlot](#apiauthremoveslot)
  - [/api/auth/saveSlots](#apiauthsaveslots)
- [PUT Endpoints](#apiput-endpoints)
  - [/api/auth/updateUser](#apiauthupdateuser)
  - [/api/auth/updateSelf](#apiauthupdateself)
- [DELETE Endpoints](#apidelete-endpoints)
  - [/api/auth/deleteUser/{id}](#apiauthdeleteuserid)
  - [/api/auth/deleteSelf](#apiauthdeleteself)

## <b>GET Endpoints</b>

### `/login.html?logout`
- **Descrizione:** Esegue il logout dell'utente.
- **Metodo:** `GET`
- **Risposta:** `200` - Ok.
- **Controller**: `AuthController`  

### `/success`
- **Descrizione:** Verifica che l'autenticazione sia avvenuta con successo.
- **Metodo:** `GET`
- **Risposta:** `User` - L'utente autenticato.
- **Controller**: `AuthController`  

### `/cards`
- **Descrizione:** Restituisce una lista filtrata di carte con supporto di paginazione e ordinamento.
- **Metodo:** `GET`
- **Controller**: `CardController`  
- **Parametri facoltativi:**
  - `Id`, `name`, `supertype`, `type`, `subtype`, `set`, `page`, `orderBy`, `direction`
- **Risposta:** `CardDto` - Lista delle carte filtrate.
- **Esempio chiamata**:
```json
http://localhost:8080/cards?name=char&supertype=Pokémon&type=Fire
```

### `/api/auth/filtered-in-sleeves`
- **Descrizione:** Recupera le carte dell'utente autenticato con vari filtri.
- **Metodo:** `GET`
- **Controller**: `CardController`  
- **Parametri facoltativi:** `id`, `name`, `supertype`, `type`, `subtype`, `set`, `page`, `orderBy`, `direction`, `owned`
- **Risposta:** `CardDto` - Lista di carte filtrate nelle sleeves dell'utente.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/filtered-in-sleeves //stesso funzionamento di /cards
http://localhost:8080/api/auth/filtered-in-sleeves?owned=1 //mostra solo le carte possedute dall'utente loggato
```

### `/api/deb/cardById`
- **Descrizione:** Restituisce i dettagli di una carta specifica.
- **Metodo:** `GET`
- **Controller**: `CardController` 
- **Parametri:** `id` - L'ID della carta.
- **Risposta:** `Card` - Informazioni della carta.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deb/cardById?id=base1-60
```

### `/api/deb/users`
- **Descrizione:** Recupera la lista di tutti gli utenti.
- **Metodo:** `GET`
- **Controller**: `UserController` 
- **Risposta:** `List<User>` - Lista di utenti.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deb/users
```

### `/api/auth/authUser`
- **Descrizione:** Recupera i dettagli dell'utente autenticato.
- **Metodo:** `GET`
- **Controller**: `UserController` 
- **Risposta:** `User` - L'utente autenticato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/authUser
```

### `/api/auth/mySleeves`
- **Descrizione:** Recupera tutte le sleeves dell'utente autenticato.
- **Metodo:** `GET`
- **Controller**: `SleeveController`  
- **Risposta:** `List<Sleeve>` - Lista di sleeves.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/mySleeves
```

### `/api/auth/mySleeve`
- **Descrizione:** Recupera una sleeve specifica dell'utente autenticato.
- **Metodo:** `GET`
- **Controller**: `SleeveController`  
- **Parametri:** `cardRequest` - L'ID della carta.
- **Risposta:** `Sleeve` - La sleeve corrispondente.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/mySleeve?cardRequest=base1-1 //Bisogna essere loggato con un utente che possiede la carta con id: base1-1
```

### `/api/deb/ratings`
- **Descrizione:** Recupera tutti i rating.
- **Metodo:** `GET`
- **Controller**: `RatingController`  
- **Risposta:** `List<Rating>` - Tutti i rating.
```json
http://localhost:8080/api/deb/ratings
```

[Torna all'indice](#indice)
##  <b>POST Endpoints</b>

### `/register/save`
- **Descrizione:** Registra un nuovo utente.
- **Metodo:** `POST`
- **Controller**: `AuthController`  
- **Corpo:** `UserDto` - Informazioni dell'utente.
- **Risposta:** `UserDto` - Dati dell'utente registrato o errore.
- **Esempio chiamata**:
```json
http://localhost:8080/register/save
body(x-www-form-urlencoded):
"key":"firstName","value":"prova","description":"","type":"text",
"key":"lastName","value":"prova","description":"","type":"text",
"key":"email","value":"prova1@gmail.com","description":"","type":"text",
"key":"password","value":"Password123!","description":"","type":"text",
"key":"dob","value":"2000-12-12","description":"","type":"text",
"key":"phone","value":"0123456789","description":"","type":"text"

```

### `/login`
- **Descrizione:** Login di un utente già registrato.
- **Metodo:** `POST`
- **Controller**: `AuthController`  
- **Corpo:** `username`(email) - email dell'utente registrato; `password` - password dell'utente registrato
- **Risposta:** `UserDto` - Dati dell'utente registrato o errore.
- **Esempio chiamata**:
```json
http://localhost:8080/login
body(x-www-form-urlencoded):
"key":"username","value":"prova1@gmail.com","description":"","type":"text",
"key":"password","value":"Password123!","description":"","type":"text"

```

### `api/auth/decksByUser`
- **Descrizione:** Recupera i deck associati a un utente.
- **Metodo:** `POST`
- **Controller**: `DeckController`  
- **Corpo:** `{ "userId": Integer }` - ID dell'utente.
- **Risposta:** `List<Deck>` - Lista dei deck.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/decksByUser
{
    "userId": 6
}
```

### `api/auth/addDeck`
- **Descrizione:** Aggiunge un nuovo deck per l'utente autenticato.
- **Metodo:** `POST`
- **Controller**: `DeckController`  
- **Corpo:** `Deck` - Dati del deck.
- **Risposta:** `Deck` - Il deck creato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/addDeck
{
  "name": "Deck Prova",
  "description": "Questo e' un Deck di prova"
}
```

### `api/deb/removeDeck`
- **Descrizione:** Rimuove un deck dell'utente autenticato.
- **Metodo:** `POST`
- **Controller**: `DeckController`  
- **Corpo:** `Deck` - Il deck da rimuovere.
- **Risposta:** `String` - Conferma della rimozione.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deb/removeDeck
{
    "id": 11 //cambia l'id con il l'id del deck che vuoi rimuovere
}
```

### `api/deb/validateDeck`
- **Descrizione:** Valida un deck.
- **Metodo:** `POST`
- **Controller**: `DeckController`  
- **Corpo:** `List<Slot>` - Slot del deck.
- **Risposta:** `DeckPass` - Risultato della validazione.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deb/validateDeck
[
    {
        "id": {
            "idCard": "base1-60"
        },
        "quantity": 6
    },
    {
        "id": {
            "idCard": "swsh9-26"
        },
        "quantity": 3
    },
    {
        "id": {
            "idCard": "swsh9-28"
        },
        "quantity": 5
    },
    {
        "id": {
            "idCard": "swsh9-30"
        },
        "quantity": 2
    },
    {
        "id": {
            "idCard": "swsh9-28"
        },
        "quantity": 4
    }
]
```

### `api/deb/getRatingsByDeck`
- **Descrizione:** Recupera i rating di un deck specifico.
- **Metodo:** `POST`
- **Controller**: `RatingController`  
- **Corpo:** `Deck` - Deck target.
- **Risposta:** `List<Rating>` - Lista dei rating.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deb/getRatingsByDeck
{
    "id": 9 //cambia l'id con il l'id del deck per il quale vuoi vedere i voti
}
```


### `api/auth/updateRating`
- **Descrizione:** Aggiunge o aggiorna un rating per un deck.
- **Metodo:** `POST`
- **Controller**: `RatingController`  
- **Corpo:** `Rating` - Dati del rating.
- **Risposta:** `Rating` - Il rating aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080api/auth/updateRating
{
    "id":{
        "idDeck" : 9
    }
    ,
    "rate" : true
}
```

### `api/auth/removeRating`
- **Descrizione:** Rimuove un rating da un deck, in base all'utente autenticato.
- **Metodo:** `POST`
- **Controller**: `RatingController`  
- **Corpo:** `Rating` - Rating da rimuovere.
- **Risposta:** `String` - Conferma della rimozione.
- **Esempio chiamata**:
```json
http://localhost:8080api/auth/removeRating
{
    "id": {
        "idDeck": 9
    }
}
```

### `api/auth/updateSleeve`
- **Descrizione:** Aggiunge o aggiorna una sleeve.
- **Metodo:** `POST`
- **Controller**: `SleeveController`  
- **Corpo:** `Sleeve` - Dati della sleeve.
- **Risposta:** `Sleeve` - La sleeve aggiornata.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/updateSleeve
{
  "id": {
    "idUser": 9,
    "idCard": "base1-1"
  },
  "quantity": 4
}
```

### `api/auth/removeSleeve`
- **Descrizione:** Rimuove una sleeve.
- **Metodo:** `POST`
- **Controller**: `SleeveController`  
- **Corpo:** `Sleeve` - Sleeve da rimuovere.
- **Risposta:** `String` - Conferma della rimozione.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/updateSleeve
{
  "id": {
    "idUser": 9,
    "idCard": "base1-1"
  },
  "quantity": 4
}
```
### `api/auth/updateSlot`
- **Descrizione:** Aggiunge o aggiorna uno slot.
- **Metodo:** `POST`
- **Controller**: `SlotController`  
- **Corpo:** `Slot` - Dati dello slot.
- **Risposta:** `Slot` - Lo slot aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/updateSlot
{
  "id": {
    "idDeck": 9,
    "idCard": "base1-60"
  },
  "quantity": 4
}
```
### `api/auth/removeSlot`
- **Descrizione:** Rimuove uno slot.
- **Metodo:** `POST`
- **Controller**: `SlotController`  
- **Corpo:** `Slot` - Slot da rimuovere.
- **Risposta:** `String` - Conferma della rimozione.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/removeSlot
{
  "id": {
    "idDeck": 9,
    "idCard": "base1-60"
  },
  "quantity": 4
}
```

### `api/auth/saveSlots`
- **Descrizione:** Aggiunge una lista di slot.
- **Metodo:** `POST`
- **Controller**: `SlotController`  
- **Corpo:** `List<Slot>` - Lista di slot.
- **Risposta:** `List<Slot>` - Gli slot aggiunti.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/saveSlots
[
    {
        "id": {
            "idCard": "base1-60"
        },
        "quantity": 3
    },
    {
        "id": {
            "idCard": "base1-61"
        },
        "quantity": 3
    },
    {
        "id": {
            "idCard": "base1-62"
        },
        "quantity": 2
    },
    {
        "id": {
            "idCard": "base1-63"
        },
        "quantity": 2
    },
    {
        "id": {
            "idCard": "base1-64"
        },
        "quantity": 4
    }
]
```
[Torna all'indice](#indice)
## <b>PUT Endpoints</b>

### `api/auth/updateUser`
- **Descrizione:** Aggiorna l'utente con i dati passati nel body
- **Metodo:** `PUT`
- **Controller**: `UserController`  
- **Corpo:** `UserDto` - Nuovi dati dell'utente.
- **Risposta:** `UserDto` - Utente aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/updateUser
{
    "id" : 7,
    "firstName" :"Hello",
    "lastName" :"World",
    "password" : "ThisIsAPassword",
    "email": "email@gmail.com",
    "dob" : "1990-05-15",
    "phone" : "0123456789"
}
```
### `api/auth/updateSelf`
- **Descrizione:** Aggiorna l'utente autenticato con i dati passati nel body
- **Metodo:** `PUT`
- **Controller**: `UserController`  
- **Corpo:** `UserDto` - Nuovi dati dell'utente.
- **Risposta:** `UserDto` - Utente aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/auth/updateSelf
{
    "id" : 7,
    "firstName" :"Hello",
    "lastName" :"World",
    "password" : "ThisIsAPassword",
    "email": "email@gmail.com",
    "dob" : "1990-05-15",
    "phone" : "0123456789"
}
```
## <b>DELETE Endpoints</b>

### `api/auth/deleteUser/{id}`
- **Descrizione:** Rimuove l'utente specificato dal database.
- **Metodo:** `DELETE`
- **Controller**: `UserController` 
- **Parametri:** `id` - ID dell'utente da rimuovere.
- **Risposta:** `Void` - Conferma della rimozione.
- **Risposta:** `UserDto` - Utente aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deleteUser/7
```

### `api/auth/deleteSelf`
- **Descrizione:** Rimuove l'utente autenticato.
- **Metodo:** `DELETE`
- **Controller**: `UserController` 
- **Risposta:** `Void` - Conferma della rimozione.
- **Risposta:** `UserDto` - Utente aggiornato.
- **Esempio chiamata**:
```json
http://localhost:8080/api/deleteSelf
```

[Torna all'indice](#indice)

---