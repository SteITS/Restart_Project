## Indice
1. [Introduzione](#megadex)
    * [Obiettivo del Documento](#obbiettivo-del-documento) 
2. [Requisiti Minimi per l'utilizzo dell'Applicazione](#requisiti-minimi-per-lutilizzo-dellapplicazione)
3. [Informazioni comuni a tutte le pagine](#informazioni-comuni-a-tutte-le-pagine)
4. [Home Page](#home-page)
5. [Login](#login)
6. [Registrazione](#registrazione)
7. [Area Personale](#area-personale)
8. [Collezione Privata](#collezione-privata)
9. [Deckbuilder](#deckbuilder)
    * [Regole per la costruzione del mazzo](#regole-per-la-costruzione-del-mazzo)
10. [Community](#community)


# MegaDex
MegaDex è un applicativo WEB APP per la gestione di Pokémon TGC. L'applicativo comprende funzionalità come la registrazione e login utenti, la creazione di un mazzo Pokémon, L'aggiunta e la rimozione di carte dalla collezione personale e il rating per i mazzi altrui.

## Obbiettivo del documento
Il documento descrive le funzionalità dell'applicazione web MegaDex, finalizzata alla visualizzazione e gestione di collezioni di carte Pokemon e relativi mazzi personali.

# Requisiti Minimi per l'utilizzo dell'Applicazione
 I requisiti minimi per l'utilizzo dell'applicazione sono i seguenti:
- Browser supportati: Google Chrome, Mozilla Firefox
- Browser non supportati: Microsoft Edge
- Connessione ad Internet
- Registrazione di un account all'interno del sito

<span style="color:red">Importante:</span> non è assicurato il funzionamento corretto nei browser non menzionati, ed è consigliata l'ultima versione di qualunque browser.

# Informazioni comuni a tutte le pagine
Nell'angolo in alto a destra della pagina è presente un simbolo rotondo cliccabile che mostra la bandiera italiana o inglese, rispettivamente alla lingua selezionata.

![Bandiera-Italiana](./img_manuale_utente/bandiera-italiana.png)
![Bandiera-Inglese](./img_manuale_utente/bandiera-inglese.png) 

Nella sezione in alto al centro-destra sono presenti i link a tutte le pagine accessibili sull'applicazione:

- Home: link alla pagina iniziale del sito
- Deckbuilder: pagina dedicata alla creazione e modifica dei mazzi
- Community: pagina dedicata all'interazione con gli altri utenti ed i loro mazzi
- Collezione: pagina dedicata alla collezione personale
- Area Personale: pagina dedicata al login, o gestione dei propri dati se il login è già stato eseguito

![Link-Pagine](./img_manuale_utente/link.png)

Per effettuare il login o la registrazione se è il primo accesso, bisogna cliccare sull'area personale oppure si verrà reindirizzati automaticamente alla pagina di login, se si prova ad aprire una qualunque delle altre pagine a cui l'accesso è limitato agli utenti già registrati e che hanno effettuato il login.


# Home Page
La Home page è la pagina iniziale in cui si attera aprendo l'applicazione, in cui si può consultare l'intera fornitura di carte presente nell'applicazione, tramite ricerca per nome o filtri.

<span style="color:red">Importante:</span> questa è anche l'unica pagina consultabile senza login (previa registrazione).

![Home Page](./img_manuale_utente/home.png)

# Login
Nella pagina di login è possibile accedere tramite l'email usata per registrarsi, e la password associata, dopo di che si può accedere a tutte le altre aree dell'applicazione.

Se non ci si è prima registrati non si può eseguire l'accesso, per registrarsi basta cliccare sulla scritta **"Registrati qui"**

![Login-Page](./img_manuale_utente/login.png)

Nel caso in cui non ci si sia ancora registrati o le credenziali inserite siano errate compare la seguente schermata:

![Login-Errato](./img_manuale_utente/login-errato.png)

# Registrazione

Per registrarsi è necessario inserire i seguenti campi:
- Nome
- Cognome
- Data di nascita
- Email (Deve essere un email valida ed esistente, e non deve essere usata da un altro account)
- Password, di cui deve avere almeno:
    * 1 lettera maiuscola
    * 1 lettera minuscola
    * 1 simbolo
    * 1 numero
- Numero di telefono

Per terminare la registrazione cliccare su registrati, se i dati inseriti sono corretti e l'email non è già stata registrata, verrà visualizzata la seguente schermata:

![Registrazione-effettuata](./img_manuale_utente/registrazione-effettuata.png)

Nel caso in cui per esempio la password sia sbagliata verra mostrata la seguente schermata, oppure un error diverso se il dato sbagliato sia un altro:

![alt text](./img_manuale_utente/reg-pass-errata.png)

Dopo la registrazione sarà possibile eseguire il login tramite email e password.

# Area Personale

Dopo aver eseguito il login si verrà indirizzati nell'area personale, in cui si possono visualizzare i dati personali inseriti al momento della registrazione.

Al di sotto dei dati personali ci sono 4 pulsanti cliccabili che permettono rispettivamente di:
- Cancella utente: eliminare il proprio account
- Logout: uscire dal proprio account senza eliminarlo e in caso rientrare nello stesso o con un altro
- Modifica: modificare i dati relativi al proprio account
- Salva: salvare i dati modificati

Nel fondo della schermata cè la sezione dedicata ai mazzi personali creati, che nel caso della foto sottostante sarà vuota se non sono ancora stati creati dei mazzi.
![Area Personale](./img_manuale_utente/area-personale.png)

# Collezione privata

Nella sezione collezione privata è possibile visualizzare tutte le carte esistenti oppure soltanto quelle presenti nella propria collezione, oltre a selezionare le carte tramite una serie di filtri o tramite il nome della carta, nella schermata sottostante sono state selezionate tutte le carte possedute o no, di tipo fuoco e ordinate per nome.

Sulla destra della schermata è possibile vedere i dettagli della carta selezionata, e se si vuole aggiungerla o rimuoverla dalla propria collezione tramite i simboli -/+, in caso la carta sia già presente nella collezione questi aumenteranno o diminuiranno il numero di copie possedute di tale carta.

![Collezione Privata](./img_manuale_utente/collezione.png)

Scorrendo verso il fondo della pagina sarà possibile visualizzare più carte, più dettagli della carta selezionata, e tramite le freccie a destra e sinistra sul fondo, scorrere altre pagine della collezione di carte.

![Dettagli-collezione](./img_manuale_utente/dettagli-collezione.png)


# Deckbuilder

Per accedere alla sezione della creazione del deck si può cliccare sul relativo link in alto, se si vuole creare un nuovo mazzo da zero, oppure si viene reindirizzati qua se si modifica un mazzo già esistente, tramite la sezione mazzi personali nell'area personale.

All'interno di deck builder si vedono al centro tutte le carte esistenti, con ricerca per nome e filtri vari, se si clicca sulla carta essa sarà aggiunta al mazzo.

Nella sezione a destra si visualizzano le carte inserite nel mazzo, rimuovibili tramite la X sul bordo destro, e il pulsante per salvare il mazzo

![Deckbuilder](./img_manuale_utente/deckbuilder.jpeg)

## Regole per la costruzione del mazzo:
- Il mazzo deve avere precisamente 60 carte
- Possono essere presenti al massimo 4 copie per carta (ad esclusione delle energie)
- Non devono essere presenti carte bannate nel formato di deck che si vuole costruire
- Devono essere rispettate le regolazioni specifiche per ogni carta

# Community

Nella sezione della community è possibile ricercare un deck specifico tramite il nome, oppure tutti i deck creati da uno specifico utente.

Nella parte inferiore sono mostrati i deck cercati, oppure se non è stata eseguita una ricerca tutti quelli esistenti.

Riguardo ai mazzi sono mostrati i seguenti dati:
- Nome del mazzo
- Tipi elementali che compongono il mazzo
- Nome dell'utente che ha creato il mazzo

E sono possibili le seguenti interazioni:
- Mi piace: mettere una valutazione positiva al deck in questione
- Non mi piace: mettere una valutazione negativa al deck in questione

![Community](./img_manuale_utente/community.jpeg)

Se invece si seleziona un singolo mazzo si visualizza la schermata soprastante, in cui vengono mostrate tutte le carte che compongono il mazzo.

Delle carte vengono visualizzati le seguenti informazioni:
- Nome della carta
- Tipo elementale della carta
- Quantita della carta all'interno del mazzo
- Rarità della carta




