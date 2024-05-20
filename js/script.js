const campoContainerEl = document.getElementById("campo-container");

const playButton = document.getElementById("start-game");
playButton.addEventListener('click', function(){
    
    // definisco difficolta
    let difficultyChoiceEl = document.getElementById("difficulty-choice")
    let difficulty = difficultyChoiceEl.value;

    //  definisco il numero di celle
    let numberOfCell;
    if (difficulty === "easy") {
        numberOfCell = 49;
    } else if(difficulty === "normal") {
        numberOfCell = 81;
    } else {
        numberOfCell = 100;
    }


    // prima svuoto il container
    campoContainerEl.innerHTML = ''

    // genero le celle al click del play
    for (let i = 1; i < numberOfCell + 1; i++) {
        let article = document.createElement("article");
        article.innerHTML = `<p>${i}</p>`
        article.classList.add("cella" , `${difficulty}`);
        campoContainerEl.appendChild(article);

        article.addEventListener('click', function(){
            article.classList.toggle("active");
            console.log(this.innerText);
        });
    }
});