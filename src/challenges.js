// Desafio 1
function compareTrue(a, b) {
  let compare = 10;
  
  if(a < compare && b > compare){
    return true;
  } else{
    return false;
  }
  // seu código aqui
}
//console.log(compareTrue(5, 10));

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height)/2;
  return calculo;
  // seu código aqui
}
//console.log(calcArea(10, 4));


// Desafio 3
function splitSentence(string) {
    let split = string.split(" ");
    return split;
  }
  //console.log(splitSentence("Go Trybe!"));
  // seu código aqui

// Desafio 4
function concatName(nomes) {
  let PRIMEIROITEM;
  let ULTIMOITEM;
  let name = "";
    for (index = 0; nomes.length > index; index += 1){
      PRIMEIROITEM = nomes[0];
      if (index = nomes.length - 1){
        ULTIMOITEM = nomes[index];
      }
      name = ULTIMOITEM +", "+ PRIMEIROITEM;
    }
    return name;
  }
// seu código aqui
//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]))

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
