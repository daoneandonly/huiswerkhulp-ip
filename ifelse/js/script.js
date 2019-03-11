// declareer variable
var myName = "Steven";

// declareer function met parameters 'length' en 'name'
function checkLength(length, name) {
  // kijk of de waarde van 'length' gelijk is aan de lengte van 'name'
  if (length == name.length) {
    // zoja, console.log() dit:
    console.log("True! De naam heeft " + length + " letters!");
  } else {
    // zonee, console.log() dit:
    console.log("False! De naam heeft niet " + length + " letters :(");
  }
}

// voer de checkLenght function uit met waarde '6' en variable myName
checkLength(6, myName);
