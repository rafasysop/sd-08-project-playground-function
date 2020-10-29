// Desafio 1
function compareTrue(primeiroValor,segundoValor) {
  if (primeiroValor==true && segundoValor==true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base*heigth)/2);
}

// Desafio 3
function splitSentence(frase) {
  return frase.split (" ");
}

// Desafio 4
function concatName(listaNomes) {
  let tamanho = listaNomes.length;
  return listaNomes[tamanho-1] + ", " + listaNomes[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3)+(ties*1));
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let count = 0;
  for (let i=0; i<numbers.length; i+=1){
    if (numbers[i] > highestNumber){
      highestNumber = numbers[i];
    }
  }
  for (let i=0; i<numbers.length; i+=1){
    if (numbers[i] === highestNumber){
      count +=1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaCat1 = Math.abs (mouse-cat1);
  let distanciaCat2 = Math.abs (mouse-cat2);
  if (distanciaCat1 < distanciaCat2){
    return "cat1";
  } else if (distanciaCat2 < distanciaCat1){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let lista = [];
  for (let i in numbers){
    if (numbers[i]%3===0 && numbers[i]%5===0){
      lista.push("fizzBuzz");
    } else if (numbers[i]%3!==0 && numbers[i]%5!==0){
      lista.push("bug!")
    } else if (numbers[i]%3===0) {
      lista.push("fizz");
    } else if (numbers[i]%5===0) {
      lista.push("buzz");
    }
  }
  return lista;  
}

// Desafio 9
function encode(frase) {
  let auxiliar = frase;
  auxiliar = auxiliar.replace (/a/g,"1");
  auxiliar = auxiliar.replace (/e/g,"2");
  auxiliar = auxiliar.replace (/i/g,"3");
  auxiliar = auxiliar.replace (/o/g,"4");
  auxiliar = auxiliar.replace (/u/g,"5");
  return auxiliar;
}

function decode(frase) {
  let auxiliar = frase;
  auxiliar = auxiliar.replace (/1/g,"a");
  auxiliar = auxiliar.replace (/2/g,"e");
  auxiliar = auxiliar.replace (/3/g,"i");
  auxiliar = auxiliar.replace (/4/g,"o");
  auxiliar = auxiliar.replace (/5/g,"u");
  return auxiliar;
}

// Desafio 10
function techList(tech,name) {
  tech = tech.sort();
  let lista = [];
  if (tech.length===0){
    return "Vazio!";
  } else {
      for (let key in tech){
        let objeto = {
          tech: tech[key],
          name: name
        }
      lista.push (objeto);
      }
      return lista;
  }
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
