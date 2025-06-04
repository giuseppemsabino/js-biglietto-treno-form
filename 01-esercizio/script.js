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

// bottone "Genera"
// Captura del botón "Genera"
document.getElementById("generateButton").addEventListener("click", function () {
    const tripDistance = parseInt(document.getElementById("km-to-do").value);
    const ageGroup = document.getElementById("inputAge").value;
    const passengerName = document.getElementById("pass-name").value;
  
    const kmPrice = 0.21;
    let outputMessage = "";
    let totalPrice = tripDistance * kmPrice;
  
    const isTripDistanceValid = !isNaN(tripDistance) && tripDistance > 0;
    const isAgeGroupValid = ageGroup === "adult" || ageGroup === "minor" || ageGroup === "senior";
  
    if (isTripDistanceValid && isAgeGroupValid && passengerName) {
      if (ageGroup === "minor") {
        const kidDiscount = totalPrice * 0.2;
        totalPrice = totalPrice - kidDiscount;
        outputMessage = `Sconto minorenne del 20%. Prezzo totale: ${totalPrice.toFixed(2)}€`;
      } else if (ageGroup === "senior") {
        const seniorDiscount = totalPrice * 0.4;
        totalPrice = totalPrice - seniorDiscount;
        outputMessage = `Sconto over 65 del 40%. Prezzo totale: ${totalPrice.toFixed(2)}€`;
      } else {
        outputMessage = `Prezzo totale senza sconto: ${totalPrice.toFixed(2)}€`;
      }
  
      const resultCard = `
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Biglietto di ${passengerName}</h5>
            <p class="card-text">
              <strong>Distanza percorsa:</strong> ${tripDistance} km<br>
              <strong>Fascia d'età:</strong> ${ageGroup === "adult" ? "Maggiorenne" : ageGroup === "minor" ? "Minorenne" : "Over 65"}<br>
              <strong>${outputMessage}</strong>
            </p>
          </div>
        </div>
      `;
  
      document.getElementById("resultCardContainer").innerHTML = resultCard;
    } else {
      let errorMessage = "Errore nei dati inseriti: ";
      if (!isTripDistanceValid) {
        errorMessage += "Distanza non valida. ";
      }
      if (!isAgeGroupValid) {
        errorMessage += "Gruppo di età non valido. ";
      }
      if (!passengerName) {
        errorMessage += "Nome Cognome non valido. ";
      }
  
      const errorCard = `
        <div class="card text-danger">
          <div class="card-body">
            <h5 class="card-title">Errore</h5>
            <p class="card-text">${errorMessage}</p>
          </div>
        </div>
      `;
  
      document.getElementById("resultCardContainer").innerHTML = errorCard;
    }
  });
  
  document.getElementById("cancelButton").addEventListener("click", function () {
    document.getElementById("pass-name").value = "";
    document.getElementById("km-to-do").value = "";
    document.getElementById("inputAge").value = "adult";
  
    document.getElementById("resultCardContainer").innerHTML = "";
  });
  