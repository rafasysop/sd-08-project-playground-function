// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true
  }else{
    return false
  }
}
console.log(compareTrue(true, false))

//---------------------------------//

// Desafio 2
function calcArea(base, height) {

  return (base * height) / 2

}
console.log(calcArea(10, 10))

//---------------------------------//

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(" ")

  return resultado
}
console.log(splitSentence("Ola mundo"))

//---------------------------------//

// Desafio 4
function concatName(names) {
  value = names.length -1

  return (`${names[value]}, ${names[0]}`)
}
console.log(concatName(['matheus', 'gabriel']))

//---------------------------------//

// Desafio 5
function footballPoints() {
  // seu código aqui
}

//---------------------------------//

// Desafio 6
function highestCount() {
  // seu código aqui
}

//---------------------------------//

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

//---------------------------------//

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

//---------------------------------//

// Desafio 9
function encode() {
  // seu código aqui
}

//---------------------------------//

function decode() {
  // seu código aqui
}

//---------------------------------//

// Desafio 10
function techList() {
  // seu código aqui
}

//---------------------------------//

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

//---------------------------------//

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

//---------------------------------//

// Desafio 13
function hydrate() {
  // seu código aqui
}

//---------------------------------//


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
