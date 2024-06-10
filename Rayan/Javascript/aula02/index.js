// let n1 = Number(prompt("digite um numero"))
// let n2 = Number(prompt("digite ou numero"))
// let div = n1 / n2

// if(n2 == 0 ){
//     document.write('Divisão: Não calculavel')
// } else {
//     document.write(`Divisão ${div}`)
// }

// let num = Number(prompt("digite um número" ))
// if (num > 0) {
//     document.write("É Maior que zero")
// } else if(num == 0){
//     document.write("É Igual que zero")
// } else { 
//     document.write("É Menor que zero")
// }


// let valor = 1500.5
// document.write('Salário: ' + valor.toLocaleString('pt-br', {style: 'currency' , currency: 'BRL'}))

cores.onchange = () => {
    switch (cores.value) {
        case "blue":
            bg.style.backgroundColor = "blue"
            break
        case "red":
            bg.style.backgroundColor = "red"
            break
        default:
            bg.style.backgroundColor = "gray"
            break
    }
}