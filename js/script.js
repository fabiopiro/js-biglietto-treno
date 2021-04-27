// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// km request
var kilometers = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
document.getElementById("kilometers").innerHTML = kilometers;
console.log(kilometers);

// age request
var age = parseInt (prompt ("Quanti anni hai?"));
document.getElementById("age").innerHTML = age;
console.log(age);

// ticket price - no discount - (km*0.21)
var normalTicketPrice = (kilometers * 0.21).toFixed(2);
document.getElementById("normal_price").innerHTML = normalTicketPrice;
console.log("Il prezzo del biglietto è: " + normalTicketPrice + "€");

// discount
var discount = 0

if (age < 18) {
    discount = ((normalTicketPrice / 100) *20).toFixed(2);
    document.getElementById("discount").innerHTML = "Siccome sei minorenne, hai diritto ad uno sconto del 20%, pari a " + discount + "€";
    console.log ("Hai diritto ad uno sconto del 20%, pari a " + discount + "€");
} else if (age > 65) {
    discount = ((normalTicketPrice / 100) *40).toFixed(2);
    document.getElementById("discount").innerHTML = "Siccome sei un over 65, hai diritto ad uno sconto del 40%, pari a " + discount + "€";
    console.log ("Hai diritto ad uno sconto del 40%, pari a " + discount + "€");
} else {
    discount = 0;
    document.getElementById("discount").innerHTML = "Non hai diritto ad alcun sconto :(";
    console.log("Non hai diritto a nessuno sconto");
}

// ticket price with discount
if (discount != 0) {
    ticketPrice = (normalTicketPrice - discount).toFixed(2);
    document.getElementById("final_price").innerHTML = "il prezzo scontato è " + ticketPrice + "€";
    console.log("il prezzo scontato è " + ticketPrice + "€");
} else {
    ticketPrice = normalTicketPrice;
    document.getElementById("final_price").innerHTML = "il prezzo rimane di " + ticketPrice + "€";
    console.log("il prezzo è " + ticketPrice + "€");
}
