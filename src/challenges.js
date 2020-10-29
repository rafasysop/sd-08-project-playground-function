// Desafio 1
function compareTrue(bool1, bool2) {
  if ( bool1 === true && bool2 === true ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ')
}

// Desafio 4
function concatName(name) {
  return ("${name[name.length - 1]},  ${name[0]}");
}

// Desafio 5
function footballPoints( wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maxRepeat = 0;
  for (let j = 0; j < numbers.length; j++) {
    let maxRepeatTest = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[j] == numbers[i]) {
        maxRepeatTest++;
      }
      if (maxRepeatTest > maxRepeat) {
        maxRepeat = maxRepeatTest;
      }
    }
  }
  return maxRepeat;
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
