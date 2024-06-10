// let nome = 'rayan'
// document.write(`Olá ${nome} <br>`);
// document.write(`O ${nome} é um Programador junior`);

n1 = Number(prompt('digite um numero:'))
n2 = Number(prompt('digite outro numero: '))
let soma = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
document.write(`Soma: ${soma} <br> `)
document.write(`Subtração: ${sub} <br> `)
document.write(`Multiplicação: ${mult} <br>     `)
document.write(`Divisão: ${div == Infinity? 'Não calculavel': div}`)