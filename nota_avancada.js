let aluno = {
	nome: 'Enzo',
	sobrenome: 'Gabriel',
	nota1: 6,
	nota2: 7,
	trabalho: 8
};

let media = (aluno.nota1 + aluno.trabalho + aluno.nota2 * 2) / 4;

if(media >= 7){
	console.log(`O aluno ${aluno.nome} ${aluno.sobrenome} foi a aprovado com a média ${media}`);
} else {
	console.log("O aluno foi reprovado")
}