let capital = 200;
let tempo = 12;
let taxaJuros = 0.050;

let montante = capital * (1 + taxaJuros)**tempo;

console.log(`valor do juros é R$ ${montante - capital}`);

console.log(`valor total é R$ ${montante}`);

alert(montante);