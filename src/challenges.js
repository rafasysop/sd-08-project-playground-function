// Desafio 1
function compareTrue(a, b) {
  if (a && b == true) {
    return true;
  }
  else {
    return false;
  }
}
//console.log (compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
//console.log(calcArea(10, 0))

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
//console.log(splitSentence("Rodrigo de Castro"))

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length-1];
  return last + ', ' + first;
}
//console.log(concatName(['Rodrigo', 'de Castro', 'Bandeira', 'Costa']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}
console.log(footballPoints(3, 1));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
