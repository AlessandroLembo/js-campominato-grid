console.log('JS OK');

/*
TRACCIA:

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico
che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, 
poi coloriamo la cella d'azzurro!

BONUS
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
  divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, 
  divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
  divise in 7 caselle per 7 righe;

Note:
- questo bonus richiederà una riflessione extra per quel che riguarda 
  il calcolo della larghezza delle celle ;)

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, 
dividiamo il lavoro in micro problemi.
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento
*/

/*
ANALISI:

- Prepariamo l'HTML ed il CSS per ottenere il risultato grafico.
- Prendo l'elemento dalla pagina.
- Dichiaro delle variabili che raccolgono il numero di colonne, 
  di righe e il totale delle celle.
- Agganciare un event listener al button.  
- Apro un ciclo for per creare le celle.    
- Dichiaro una funzione per creare la griglia composta da 100 celle. 
*/

// Prendere l'elemento dalla pagina.
const gridElement = document.getElementById('grid');
const buttonElement = document.getElementById('button');
// console.log(gridElement, buttonElement);

/* Dichiaro delle variabili che raccolgono il numero di colonne, 
   di righe e il totale delle celle. */
const rows = 10;
const cols = 10;
totalCells = rows * cols;
// console.log(totalCells);

// Dichiaro una funzione per creare la griglia composta da 100 celle.

// Agganciare un event listenet al button
buttonElement.addEventListener('click', function(){

    // Apro un ciclo for per creare le celle-
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridElement.appendChild(cell);   
    }

})







