// Desafio 1
function compareTrue(a,b) {
  if ( a==true && b==true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area;
  area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let resultado;
  resultado = str.split(" ");
  return resultado;
}

// Desafio 4
function concatName(list) {
  let fraseFinal;
  let index = list.length;
  fraseFinal=list[index-1] + ", " + list[0];
  return fraseFinal;
}

// Desafio 5
function footballPoints(vit,emp) {
  let pontosTotal;
  pontosTotal=vit*3 + emp;
  return pontosTotal;
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
