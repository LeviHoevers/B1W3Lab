// Levi Hoevers
// 99065078
// softwaredeveloper

var small = prompt ("kies uw aantal small pizza's deze kost $5"); // de var: small slaat op hoeveel pizza's u heeft gekozen hetzelfde zie je terug bij de var:medium,large
var medium = prompt ("kies uw aantal medium pizza's $10");
var large = prompt ("kies uw aantal large pizza's deze kost $15");

const SMALLPRICE = 5; // const zorgt ervoor dat de prijs vast staat van de verschillende maten pizza's
const MEDIUMPRICE = 10;
const LARGEPRICE = 15;

var smalltotal = small * SMALLPRICE; // hier doe je het aantal pizza's keer de prijs en dat word samen small total hetzelfde gebeur bij mediumtotal,largetotal
var mediumtotal = medium * MEDIUMPRICE; 
var largetotal = large * LARGEPRICE;
var total = smalltotal + mediumtotal + largetotal;

document.write ("Aantal small pizza's " + small + " " + "en dat kost" + " " + smalltotal + "<br>"); // de document.write schrijft de inhoud op van de strings en de variabele 
document.write ("Aantal medium pizza's" +" "+ medium + " " + "en dat kost" + " " + mediumtotal + "<br>");
document.write ("Aantal large pizza's " + large + " " + "en dat kost" + " " + largetotal + "<br>");
document.write ("<br>" + "U totaal prijs is " + " " + total);