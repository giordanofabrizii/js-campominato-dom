const campoContainerEl = document.getElementById("campo-container");

const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    // prima svuoto il container
    campoContainerEl.innerHTML = ''

    // reset del punteggio
    let punteggio = 0;

    //HTML element to vizualize the score
    let scoreEl = document.getElementById("score");
    scoreEl.innerHTML = punteggio;

    // definisco numero di bombe
    const numberOfBombs = 16;

    // genero la griglia
    generaGriglia(punteggio, numberOfBombs, scoreEl);
});

/**
 * Generate a grid with a numberOfCell chosen by the difficulty, with a "punteggio" and a "el" to update and show the score, and a number of bombs that it generate in the grid
 * 
 * @param {*} punteggio 
 * @param {*} numberOfBombs 
 * @param {*} el 
 */
function generaGriglia(punteggio, numberOfBombs, el) {

    // definisco difficolta
    let difficultyChoiceEl = document.getElementById("difficulty-choice")
    let difficulty = difficultyChoiceEl.value;

    // definisco il numero di celle
    switch (difficulty) {
        case '1':
            var numberOfCell = 81;
            var className = 'normal';
            break;
        case '2':
            var numberOfCell = 49;
            var className = 'hard';
            break;
        default:    
            var numberOfCell = 100;
            var className = 'easy';
    }

    // genero degli interi per definire le bombe
    let bombsArray = generaBombe(numberOfCell, numberOfBombs);

    // genero n caselle
    for (let i = 1; i < numberOfCell + 1; i++) {
        let article = document.createElement("article");

        // definisco il contenuto
        if (bombsArray.includes(i)) {
            article.classList.add("bomb");

            let span = document.createElement("span");
            article.appendChild(span);
        } else {
            article.innerHTML = `<p>${i}</p>`
            article.classList.add("safe");
        }

        article.classList.add("cella" , `${className}`);
        campoContainerEl.appendChild(article);

        article.addEventListener('click', function(){
            // devo verificare che non sia gia cliccata
            if (article.classList.contains("unclickable") == 0) {
                article.classList.add("active");
                article.classList.add("unclickable");

                //controllo se e' una bomba
                if (article.classList.contains("bomb")) {
                    sconfitta(numberOfCell, bombsArray);
                    return
                } 

                // controllo se era l'ultima casella
                punteggio += 1;
                el.innerHTML = punteggio;

                if ((punteggio + numberOfBombs) == numberOfCell) {
                    vittoria(numberOfCell);
                    return
                }
            }
        });
    }
}

/**
 * Generate a random number between the min an the max value given, included
 * 
 * @param {} min 
 * @param {} max 
 * @returns 
 */
function generaRandom(min, max) {
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
}

/**
 * When given an int, returns an array of a determinated length of numbers included betweween 1 and the int
 * 
 * @param {} int max index of the bomb
 * @returns array
 */
function generaBombe(cellNumber, bombsNumber) {
    let array = [];
    for (let i = 0; i < bombsNumber; i++) {
        var newBomb = generaRandom(1,cellNumber);
        while (array.includes(newBomb)) {
            newBomb = generaRandom(1,cellNumber);
        }
        array.push(newBomb);
    }

    return array;
}

function sconfitta(int, array) {
    // annullo ogni click
    eliminaClicks(int);

    // visualizzo ogni bomba
    let cells = document.getElementsByClassName("cella")
    for (let i = 0; i < array.length; i++) {
        cells[array[i] - 1].classList.add("active")
    }
}

function vittoria(int) {
    // annullo ogni click
    eliminaClicks(int);
}

/**
 * Add a class to all the "cella" element to make them unlickable
 * 
 * @param {*} int 
 */
function eliminaClicks(int){
    // prendo una lista di tutti gli elementi "cella"
    let cells = document.getElementsByClassName("cella")

    for (let i = 0; i < cells.length; i++) {
        // aggiungo classe unlcickable a tutti gli elementi
        cells[i].classList.add("unclickable")
    }
}