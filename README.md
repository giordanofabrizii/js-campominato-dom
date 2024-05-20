L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

    con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


<!-- ! SPIEGAZIONE SCRIPT -->
Al bottone "play" assegno una chiamata di funzione che prende in argomento il numero di caselle da generare definito dalla difficolta
ciclo da 1 al numero + 1 per generare ogni quadrato
    aggiungo come contenuto un p che abbia come contenuto l'indice
    aggiungo l'event listner al click
        aggiungere una classe che rilevi il contenuto e cambi il background
        inserire un controllo per vedere se era gia cliccata
        se e' una cella "buona": punteggio += 1
        se e' una cella bomba: fine gioco
    
    genero 16 bombe casuali attraverso una funzione randomica e lo assegno a determinate caselle

