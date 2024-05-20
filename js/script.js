const campoContainerEl = document.getElementById("campo-container");

const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    // prima svuoto il container
    campoContainerEl.innerHTML = ''

    // genero la griglia
    generaGriglia();
});

function generaGriglia() {

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
    let bombsArray = generaBombe(numberOfCell);

    // genero n caselle
    for (let i = 1; i < numberOfCell + 1; i++) {
        let article = document.createElement("article");

        // definisco il contenuto
        if (bombsArray.includes(i)) {
            article.innerHTML = `<p>X</p>`
        } else {
            article.innerHTML = `<p>${i}</p>`
        }
        article.classList.add("cella" , `${className}`);
        campoContainerEl.appendChild(article);

        article.addEventListener('click', function(){
            article.classList.toggle("active");
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
function generaBombe(cell) {
    let array = [];
    const numberOfBombs = 16;
    for (let i = 0; i < numberOfBombs; i++) {
        var newBomb = generaRandom(1,cell);
        while (array.includes(newBomb)) {
            newBomb = generaRandom(1,cell);
        }
        array.push(newBomb);
    }

    return array;
}