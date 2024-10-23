// *Descrizione:
// Scrivere un programma che chieda all'utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

//* MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.


// *MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e 
// visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con
//  massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. 
// Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
const tripDistance = parseInt(prompt("Qualè la distanza da percorrere"));

const passenegerAge = parseInt(prompt("Età del passegero"));

const kmPrice = 0.21;
let outputMessage = "";

/*ELABORAZIONE */
const isTripDistanceValid = !isNaN(tripDistance) && tripDistance > 0;
const isPassengerAgeValid = !isNaN(passenegerAge) && passenegerAge >= 0;

if (isPassengerAgeValid && isTripDistanceValid) {
  let totalPrice = tripDistance * kmPrice;

  if (passenegerAge < 18) {
    const kidDiscount = totalPrice * 0.2;
    totalPrice = totalPrice - kidDiscount;

    outputMessage += `Essendo minore di 18 anni si applica lo sconto infantile di un -20% sull totale del biglietto. totale =   ${totalPrice.toFixed(
      2
    )}  €`;
  }
  else if (passenegerAge > 65) {
    const elderDiscount = totalPrice * 0.4;
    totalPrice = totalPrice - elderDiscount;

    outputMessage += `Essendo maggiore di 65 annisi applica lo sconto terza età di -40% sull totale del biglietto. totale =   ${totalPrice.toFixed(
      2
    )}  €`;
  }
  else {
    outputMessage += `il totale sarebbe di =  ${totalPrice.toFixed(2)} €`;
  }
}
else{
    outputMessage = `Errore:`;

    if(!isPassengerAgeValid){
        outputMessage += " \n Età non valida";
    }

    if(!isTripDistanceValid){
        outputMessage += " \n Distanza non valida";
    }
}
alert(outputMessage);
