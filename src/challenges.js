// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(true,true)); //

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2);
}
// console.log (calcArea(5,5)) //

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;    
}
// console.log(splitSentence("go Trybe")) //

// Desafio 4
function concatName(arrayName) {
  let nameOut = arrayName[arrayName.length - 1] + ", " + arrayName[0];
  return nameOut;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
