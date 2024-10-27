# MegaDex
MegaDex è un applicativo WEB APP per la gestione di Pokémon TGC. L'applicativo comprende funzionalità come la registazione e login utenti, la creazione di un mazzo Pokémon, L'aggiunta e la rimozione di carte dalla collezione personale e il rating per i mazzi altrui.

## Tecnologie usate
- <b>Backend</b>:
    - Java 17
    - SpringBoot 3.3.4
    - SpringSecurity
- <b>Frontend</b>:
    - HTML
    - CSS
    - JavaScript
- <b>Database</b>:
    - Microsoft SQL Server 22
    - SQL Server Management Studio 19
    - T-SQL

## Set-up

### Requisiti

- Java JDK 17
- SQL Server Management Studio 19
- Microsoft SQL Server 2022 Express
- Maven

### Istruzioni

1. Clona la repository 
```bash
       git clone https://github.com/SteITS/SWD23-25.Restart_Project.git
```

2. Importa il Database:<br>
    - Avvia SMSS (SQL Server Management Studio)
    - Crea un user con Login: `MegaDex` e password: `password1.`
    <br> In alternativa modifica `application.properties` con le tue credenziali SQL
    - Esegui il dump SQL situtato nella cartella root della repo chiamato `pokemon_db.sql` in una nuova finestra di query

3. Configura l'applicazione:<br>
    In `SWD23-25.Restart_Project\MegaDex\src\main\resources` modifica `application.properties` con le impostazioni utilizzate in sviluppo o con le credenziali di login del tuo user SQL

`Puoi anche runnare l'applicativo così (devi sempre avere il db pronto)`:
```
/SWD23-25.Restart_Project/
$ java -jar MegaDex-0.0.1-SNAPSHOT.jar
```

`Impostazioni utilizzate in sviluppo`:
```Java
        spring.datasource.url =                 
        jdbc:sqlserver://localhost:1433;database=pokemon_db;encrypt=true;trustServerCertificate=true
        spring.datasource.driverClassName=com.microsoft.sqlserver.jdbc.SQLServerDriver
        spring.datasource.username=MegaDex
        spring.datasource.password=password1.
```


<b> Per più informazioni sul setup e struttura del Database -> </b> [Database](./Documentazione/Database.md)

<b> Per più informazioni sull'API -> </b> [API](./Documentazione/API.md)

<b> Per più informazioni sull'applicazione web </b> [Manuale-utente](./Documentazione/Manuale-utente.md)