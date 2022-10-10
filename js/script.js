// **Consegna:**
//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//  **Prima di partire a scrivere codice poniamoci qualche domanda:**
 
//  Come faccio a sapere se un numero è divisibile per un altro?
//  Abbiamo visto qualcosa di particolare che possiamo usare?
//  **Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//  Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

// 

// VARIABILI

// Elementi di Output
const finalGrid = document.querySelector(".ms_grid");

// INPUT

// ELABORAZIONE
// Ciclo che scorre i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Variabile che conterrà la classe per una cella speciale
    let fizzBuzz = "";
    let textContent = "";
    // Per ogni numero del ciclo viene creata un div 'cella' numerata
    // SE il numero esaminato è divisibile per 3 e 5 senza resto viene asseganta la classe bothzz alla cella
    if ((i % 3 === 0) && (i % 5 === 0)) {
        fizzBuzz = "ms_bothzz";
        textContent = "Fizz<br>Buzz";
    } else if (i % 3 === 0) {
        // SE il numero esaminato è divisibile per 3 senza resto viene assegnata la classe fizz alla cella
        fizzBuzz = "ms_fizz";
        textContent = "Fizz";
    } else if (i % 5 === 0) {
        // SE il numero esaminato è divisibile per 5 senza resto viene assegnata la classe buzz alla cella
        fizzBuzz = "ms_buzz";
        textContent = "Buzz";
    } else {
        textContent = i;
    }
    console.log (i, fizzBuzz);

    // OUTPUT
    // Viene composta serie di celle nell'html
    
    // Versione con stringa in innerHTML
    // finalGrid.innerHTML += `<div class="ms_cell ${fizzBuzz}">${textContent}</div>`

    // Versione con append
    const cell = document.createElement("div");
    cell.classList.add("ms_cell");
    
    // Aggiunta della stella
    if (fizzBuzz !== "") {
        cell.classList.add(fizzBuzz);
        cell.innerHTML = `<i class="fa-regular fa-star"></i>`
    }

    // Aggiunta della classe "special" allo span per animare solo i FizzBuzz e di span semplici per i numeri
    if (isNaN(parseInt(textContent))) {
        cell.innerHTML += `<span class="special">${textContent}</span>`;
    } else {
        cell.innerHTML += `<span>${textContent}</span>`;
    }

    console.log(cell);
    
    // OUTPUT
    finalGrid.append(cell);
    // Il ciclo termina superato 100
}

