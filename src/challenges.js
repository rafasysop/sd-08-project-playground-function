// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  return(a && b);
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return(base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  // seu código aqui
  let lettras = "";
  let palavras = [];
  for(let key in word){
    if(word[key] == " "){
      palavras.push(lettras)
      lettras = "";
    }else{
      lettras += word[key];
    }
  }
  return palavras;

}

// Desafio 4
function concatName() {
  // seu código aqui
}

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
