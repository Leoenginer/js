let numero = Math.random() * 7;
let numeroArredondado = Math.ceil(numero);
let chute = 2;
let compare = numeroArredondado == chute;



if (compare){
	console.log(`Seu chute ${chute}`);
	console.log(`Valor dado ${numeroArredondado}`);
	console.log(`Você acertou`);
}else{
	console.log(`Seu chute ${chute}`);
	console.log(`Valor dado ${numeroArredondado}`);
	console.log(`Acertou o numero errado`);
}